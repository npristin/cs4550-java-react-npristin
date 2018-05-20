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

)}};
