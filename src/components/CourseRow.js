import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {

  render() {
    return (
      <tr>
        <td>
          <Link to={`/course/${this.props.course.id}/module/lesson`}>
            <i className="fa fa-bars blue-bars"></i>
            {this.props.course.title}
          </Link>
        </td>
        <td>me</td>
        <td>
          {this.props.course.modified.substr(0, this.props.course.modified.indexOf("T"))}
        </td>
        <td>
          <i className="fa fa-times" onClick={() =>
            {this.props.delete(this.props.course.id)}}>
          </i>
        </td>
      </tr>
    )
  }
}

export default CourseRow;
