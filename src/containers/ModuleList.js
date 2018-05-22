import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleServiceClient from '../services/ModuleServiceClient'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      module: { title: '' },
      modules: []
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);

    this.setCourseId =
      this.setCourseId.bind(this);

    this.moduleServiceClient = ModuleServiceClient.instance;
  }
  setModules(modules) {
    this.setState({modules: modules})
  }
  findAllModulesForCourse(courseId) {
    this.moduleServiceClient
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }
  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId)
  }

  createModule() {
    this.moduleServiceClient
      .createModule(this.state.courseId, this.state.module)
      .then(() => { this.findAllModulesForCourse(this.state.courseId); });
  }
  titleChanged(event) {
    console.log(event.target.value);
    this.setState({module: {title: event.target.value}});
  }

  renderListOfModules() {
    var rows = this.state.modules.map((module) => {
           return <ModuleListItem courseId={this.state.courseId} module={module} key={module.id} delete={this.deleteModule}/>
     });
     return (
         rows
  )}

  deleteModule(moduleId) {
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you want to delete this module?',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
                this.moduleServiceClient.deleteModule(moduleId)
                      .then((res) => res.text())
                      .then((text) => text.length ? JSON.parse(text) : {})
                      .then(() => alert("Successfully deleted module with id: " + moduleId))
                      .catch((error) => {
                         console.log("error deleting module");
                      }).then(() => { this.findAllModulesForCourse(this.state.courseId); })
          },
          {
            label: 'No',
            onClick: () => console.log('do nothing')
          }
        ]
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.titleChanged}
               value={this.state.module.title}
               placeholder="title"
               className="form-control"/>
        <button onClick={this.createModule} className="btn btn-primary btn-block">
          <i className="fa fa-plus"></i>
        </button>
        <br/>
        <ul className="list-group">
          {this.renderListOfModules()}
        </ul>
      </div>

    );
  }
}
