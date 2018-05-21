import React from 'react';

class LessonTab extends React.Component {
   constructor(props) { super(props); }

   render() {
       return (
       <div>
       <li className="list-group-item" href="#">
         {this.props.lesson.title}
           <span className="float-right">
             <i className="fa fa-times" onClick={() =>
                {this.props.delete(this.props.lesson.id)}}>
             </i>
           </span>
       </li>
       </div>
       )
   }
}
export default LessonTab;
