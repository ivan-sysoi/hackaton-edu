import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-md/lib/Buttons/Button'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardText from 'react-md/lib/Cards/CardText'
import CardActions from 'react-md/lib/Cards/CardActions'
import { connect } from 'react-redux'
import slug from 'slug'

import golos from 'services/golos'
import { isBrowser } from 'config'
import { PageTemplate, AddCourseForm } from 'components'
import { selectCurrentUser } from 'store/selectors'
import { teacherRoleRequired } from 'utils/decorators'


if (isBrowser) {
  require('./styles.scss')
}

@teacherRoleRequired()
@connect(
  state => ({
    user: selectCurrentUser(state),
  })
)
class CoursesAddPage extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(data) {
    console.log(data)
    const postingWif = golos.auth.toWif(this.props.user.username, this.props.user.pass, 'posting');
    //golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
    golos.broadcast.comment(
      postingWif,
      '',
      'profichain',
      this.props.user.username,
      `${slug(data.formData.title)}-${new Date().getTime()}`.toLocaleLowerCase(),
      data.formData.title,
      data.formData.desc,
      {},
      (err, result) => {
        console.log('submit post: ', err, result)
        if (!err) {
          location.href = '/'
        }
      });
  }


  render() {
    return (
      <PageTemplate
        title="Create new course"
      >
        <Card>
          <CardTitle
            title="New course"
          />
          <CardText>
            <AddCourseForm
              onSubmit={this.onSubmit}
            >
              <Button
                raised
                primary
                type="submit"
              >
                Submit
              </Button>
            </AddCourseForm>
          </CardText>
          <CardActions
          >

          </CardActions>
        </Card>

      </PageTemplate>
    )
  }
}

export default CoursesAddPage
