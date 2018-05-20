import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseServiceClient from '../services/CourseServiceClient';
import CourseRow from "../components/CourseRow";
import '../styles/CourseCard.css'

export default class CourseList extends React.Component {
 constructor() {
    super();
    this.courseServiceClient = CourseServiceClient.instance;
    this.state = {courses: []};
    this.titleChanged = this.titleChanged.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
 }

 componentDidMount() {
    this.findAllCourses();
 }

 findAllCourses() {
    this.courseServiceClient.findAllCourses()
        .then((courses) => {
            this.setState({courses: courses});
            console.log(courses);
        });
 }

 titleChanged(event) {
   this.setState({
      course: { title: event.target.value }
   });
 }

 createCourse() {
    console.log("creating course");
    this.courseServiceClient.createCourse(this.state.course)
        .then(() => { this.findAllCourses(); });
 }

 deleteCourse(courseId) {
    console.log("deleting course " + courseId);
    this.courseService.deleteCourse(courseId)
        .then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .catch((error) => {
           console.log("error deleting course");
        })
        .then(() => { this.findAllCourses(); });
 }

 courseRows() {
     var rows = this.state.courses.map((course) => {
           return <CourseRow course={course} key={course.id} delete={this.deleteCourse}/>
     });
     return (
         rows
  )}


)}};
