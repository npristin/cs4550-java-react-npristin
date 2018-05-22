import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'
import CourseServiceClient from '../services/CourseServiceClient'
import { Link } from 'react-router-dom'
import '../styles/CourseEditor.css'

export default class CourseEditor
  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {courseId: '', courseTitle: ''};
    this.selectCourse = this.selectCourse.bind(this);
    this.selectModule = this.selectModule.bind(this);
    this.courseServiceClient = CourseServiceClient.instance;
    this.findCourseById = this.findCourseById.bind(this);
  }

  componentDidMount() {
    this.selectCourse(this.props.match.params.courseId);
    this.selectModule(this.props.match.params.moduleId);
    this.findCourseById(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps) {
    this.selectModule(newProps.match.params.moduleId);
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  findCourseById(courseId) {
    this.courseServiceClient
      .findCourseById(courseId)
      .then((response) => {
          console.log(response.title);
          this.setState({courseTitle: response.title});
     });
  }

  render() {
    return(
      <div className="row">
        <div className="col-4">
          <div className="container-fluid">
            <span>
              <Link to={`/courses`}>
                <i className="fa fa-chevron-left"></i>
              </Link>
              <h1>
                {this.state.courseTitle}
              </h1>
            </span>
            <h3>Modules</h3>
            <ModuleList courseId={this.state.courseId}/>
          </div>
        </div>
        <div className="col-8">
          <div className="container-fluid">
            <ModuleEditor courseId={this.state.courseId} moduleId={this.state.moduleId}/>
          </div>
        </div>
      </div>
    );
  }
}
