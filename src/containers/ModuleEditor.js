 import React from 'react'
 import LessonTabs from './LessonTabs'
 import LessonServiceClient from '../services/LessonServiceClient'

 export default class ModuleEditor
   extends React.Component {

   constructor(props) {
     super(props)
     this.state = {moduleId: '', courseId: ''};
     console.log(props);
     this.selectModule = this.selectModule.bind(this);
     this.selectCourse = this.selectCourse.bind(this);
   }

   componentDidMount() {
     this.selectModule(this.props.moduleId);
     this.selectCourse(this.props.courseId);
   }

   componentWillReceiveProps(newProps) {
      console.log(newProps)
      this.selectModule(newProps.moduleId);
      this.selectCourse(newProps.courseId);
   }

   selectModule(moduleId) {
     this.setState({moduleId: moduleId});
   }

   selectCourse(courseId) {
     this.setState({courseId: courseId});
   }

   render() { return(
     <div>
       <div className="row">
         <div className="col-8">
           <LessonTabs moduleId={this.state.moduleId} courseId={this.state.courseId}/>
        </div>
      </div>
    </div>
);}}