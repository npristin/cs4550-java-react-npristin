import React from 'react';
import '../styles/LessonTab.css'
import { NavLink } from 'react-router-dom'

class LessonTab extends React.Component {

   render() {
    return (
      <NavLink activeClassName="active" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
        <li className="nav-item">
          <div className="nav-link active">
            {this.props.lesson.title}
            <i className="fa fa-times fa-2x" onClick={() =>
              {this.props.delete(this.props.lesson.id)}}>
            </i>
          </div>
        </li>
      </NavLink>
    )
  }
}
export default LessonTab;
