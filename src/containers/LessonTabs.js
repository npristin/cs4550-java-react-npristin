import React from 'react'
import LessonServiceClient from '../services/LessonServiceClient'
import LessonTab from '../components/LessonTab'

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

}
