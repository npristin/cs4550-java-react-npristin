 import React from 'react'
 import ModuleList from './ModuleList'
 import ModuleEditor from './ModuleEditor'
 import CourseServiceClient from '../services/CourseServiceClient'

 export default class CourseEditor
   extends React.Component {

   constructor(props) {
     super(props)
     this.state = {courseId: '', courseTitle: ''};
     this.selectCourse = this.selectCourse.bind(this);
     this.courseServiceClient = CourseServiceClient.instance;
     this.findCourseById = this.findCourseById.bind(this);
   }

   componentDidMount() {
     this.selectCourse(this.props.match.params.courseId);
     this.findCourseById(this.props.match.params.courseId);
   }

   selectCourse(courseId) {
     this.setState({courseId: courseId});
   }

}
