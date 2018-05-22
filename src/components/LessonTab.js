import React from 'react';
import '../styles/LessonTab.css'

class LessonTab extends React.Component {

   render() {
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            {this.props.lesson.title}
            <i className="fa fa-times fa-2x" onClick={() =>
              {this.props.delete(this.props.lesson.id)}}>
            </i>
          </a>
        </li>
      </div>
    )
  }
}
export default LessonTab;
