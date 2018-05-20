const MODULE_API_URL =
  'http://localhost:8080/api/module';
const MODULE_CID_API_URL =
  'http://localhost:8080/api/course/CID/module';

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
}
