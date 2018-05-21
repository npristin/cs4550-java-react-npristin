import React from 'react';

class LessonTab extends React.Component {
   constructor(props) { super(props); }
   render() {
       return (
       <div>
        <li className="nav-item">
            <a className="nav-link active" href="#">
                {this.props.lesson.title}
                <i className="fa fa-times" onClick={() =>
                   {this.props.delete(this.props.lesson.id)}}>
                </i>
            </a>

        </li>
        </div>
       )
   }
}
export default LessonTab;
