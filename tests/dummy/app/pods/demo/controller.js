import Ember from 'ember'
const {Logger} = Ember

export default Ember.Controller.extend({
  actions: {
    dispatch (action) {
      const {type} = action
      switch (type) {
        default:
          Logger.warn(`Unknown action dispatched: ${type}`)
      }
    },
    doSomething (){
      Logger.info('hello')
    }
  }
});
