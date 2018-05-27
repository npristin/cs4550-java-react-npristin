import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'
import CourseServiceClient from '../services/CourseServiceClient'
import { Link } from 'react-router-dom'
import '../styles/CourseEditor.css'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {FIND_ALL_WIDGETS, ADD_WIDGET, DELETE_WIDGET, SAVE} from "../constants/WidgetConstants"
import {WidgetReducer} from "../reducers/WidgetReducer"
import {WidgetContainer} from '../components/Widget'
import {findAllWidgets, addWidget, save} from "../actions/WidgetActions"
import LessonEditor from '../containers/WidgetList'

let store = createStore(WidgetReducer)

export default class CourseEditor
  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {courseId: '', courseTitle: ''};
    this.selectCourse = this.selectCourse.bind(this);
    this.selectModule = this.selectModule.bind(this);
    this.selectLesson = this.selectLesson.bind(this);
    this.courseServiceClient = CourseServiceClient.instance;
    this.findCourseById = this.findCourseById.bind(this);
  }

  componentDidMount() {
    this.selectCourse(this.props.match.params.courseId);
    this.selectModule(this.props.match.params.moduleId);
    this.selectLesson(this.props.match.params.lessonId);
    this.findCourseById(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps) {
    this.selectModule(newProps.match.params.moduleId);
    this.selectLesson(newProps.match.params.lessonId);
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  selectLesson(lessonId) {
    this.setState({lessonId: lessonId});
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
            <Provider store={store}>
              <LessonEditor lessonId={this.state.lessonId}/>
            </Provider>
          </div>
        </div>
      </div>
    );
  }
}
