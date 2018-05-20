 import React from 'react'
 import LessonTabs from './LessonTabs'
 import LessonServiceClient from '../services/LessonServiceClient'

 export default class ModuleEditor
   extends React.Component {

   constructor(props) {
     super(props)
     this.state = {moduleId: ''};
    // this.selectModule = this.selectModule.bind(this);
   }

//   componentDidMount() {
//     this.selectModule
//     (this.props.match.params.moduleId);
//   }
//
//   selectModule(moduleId) {
//     this.setState({moduleId: moduleId});
//   }

   render() { return(
     <div>
       <div className="row">
         <div className="col-8">
           <LessonTabs/>
        </div>
      </div>
    </div>
);}}