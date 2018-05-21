import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
      <li className="list-group-item" href="#">
        {this.props.module.title}
        <span className="float-right">
          <i className="fa fa-times" onClick={() =>
             {this.props.delete(this.props.module.id)}}>
          </i>
        </span>
      </li>
    </Link>
    );
  }
}