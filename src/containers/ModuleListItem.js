import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleListItem
  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="list-group-item">
        {this.props.module.title}
        <span className="float-right">
          <i className="fa fa-times" onClick={() =>
             {this.props.delete(this.props.module.id)}}>
          </i>
        </span>
      </li>
    );
  }
}