import React from 'react'
import LessonServiceClient from '../services/LessonServiceClient'
import LessonTab from '../components/LessonTab'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import '../styles/LessonTabs.css'

export default class LessonTabs
  extends React.Component {

  constructor(props) {
   super(props);
   console.log(this.props);

   this.state = {
     lesson: { title: '' },
     lessons: [],
     courseId: '',
     moduleId: ''
   };

   this.selectModule = this.selectModule.bind(this);
   this.selectCourse = this.selectCourse.bind(this);
   this.titleChanged = this.titleChanged.bind(this);
   this.renderListOfLessons = this.renderListOfLessons.bind(this);
   this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
   this.createLesson = this.createLesson.bind(this);
   this.deleteLesson = this.deleteLesson.bind(this);

   this.lessonServiceClient = LessonServiceClient.instance;
 }

  componentDidMount() {
     this.selectModule(this.props.moduleId);
     this.selectCourse(this.props.courseId);
  }

  componentWillReceiveProps(newProps){
     this.selectModule(newProps.moduleId);
     this.selectCourse(newProps.courseId);
     this.findAllLessonsForModule(newProps.courseId, newProps.moduleId)
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  findAllLessonsForModule(courseId, moduleId) {
      console.log(courseId);
      console.log(moduleId);

      if (moduleId != null && courseId != null) {
      console.log("finding all lessons")
      this.lessonServiceClient
        .findAllLessonsForModule(courseId, moduleId)
        .then((lessons) => {this.setLessons(lessons)});
        }
  }

  setLessons(lessons) {
    this.setState({lessons: lessons})
  }

  titleChanged(event) {
    this.setState({lesson: {title: event.target.value}});
  }

  renderListOfLessons() {
    console.log(this.state.lessons)

    if (this.props.moduleId != null && this.props.courseId != null) {
    var rows = this.state.lessons.map((lesson) => {
         return <LessonTab courseId={this.props.courseId} moduleId={this.props.moduleId}
                    lesson={lesson} key={lesson.id} delete={this.deleteLesson}/>
     });
     return (
         rows
   )
   }
 }

  createLesson() {
      this.lessonServiceClient
        .createLesson(this.props.courseId, this.state.moduleId, this.state.lesson)
        .then(() => { this.findAllLessonsForModule(this.state.courseId, this.state.moduleId); })
  }

  deleteLesson(lessonId) {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you want to delete this lesson?',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
                this.lessonServiceClient.deleteLesson(lessonId)
                      .then((res) => res.text())
                      .then((text) => text.length ? JSON.parse(text) : {})
                      .catch((error) => {
                         console.log("error deleting course");
                      }).then(() => { this.findAllLessonsForModule(this.state.courseId, this.state.moduleId); })
          },
          {
            label: 'No',
            onClick: () => console.log('do nothing')
          }
        ]
      })
   }

  render() { return(
    <div className="lesson-tabs">
    <div className="container-fluid">
    <h3> Lessons </h3>
    <div className="addLesson">
    <input onChange={this.titleChanged}
         value={this.state.lesson.title}
         placeholder="title"
         className="form-control"/>
      <button onClick={this.createLesson} className="btn btn-primary btn-block">
        <i className="fa fa-plus"></i>
      </button>
    </div>
    <div>
    <ul className="nav nav-tabs">
        {this.renderListOfLessons()}
    </ul>
    </div>
    </div>
    </div>
  );
 }
}
