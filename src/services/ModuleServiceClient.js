const MODULE_API_URL =
  'https://cs4550-java-server-npristin.herokuapp.com/api/module';
const MODULE_CID_API_URL =
  'https://cs4550-java-server-npristin.herokuapp.com/api/course/CID/module';

let _singleton = Symbol();
export default class ModuleServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Cannot instantiate directly.');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new ModuleServiceClient(_singleton);
    return this[_singleton]
  }

  findAllModules() {
    return fetch(MODULE_API_URL)
      .then(function(response){
       return response.json();
      });
  }

  findAllModulesForCourse(courseId) {
    return fetch(
      MODULE_CID_API_URL
        .replace('CID', courseId))
      .then(function (response) {
        return response.json();
      })
  }

  createModule(courseId, module) {
    return fetch(MODULE_CID_API_URL.replace('CID', courseId), {
        body: JSON.stringify(module),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }

  deleteModule(moduleId) {
    return fetch(MODULE_API_URL + '/' + moduleId,
      {
        method: 'DELETE'
      });
  }

  findModuleById(moduleId) {
    return fetch(MODULE_API_URL + '/' + moduleId)
      .then(function (response) {
        return response.json();
    });
  }

  updateModule(moduleId, module) {
    fetch(MODULE_API_URL + '/' + moduleId, {
      method: 'put',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
