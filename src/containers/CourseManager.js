import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseManager extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/courses"
            component={CourseList}>
          </Route>
          <Route path="/course/:courseId/module/:moduleId?/lesson/:lessonId?"
            component={CourseEditor}>
          </Route>
        </div>
      </Router>
    )
  }
}
