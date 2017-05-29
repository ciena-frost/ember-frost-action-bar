import Ember from 'ember'
const {Controller, Logger} = Ember

export default Controller.extend({
  actions: {
    dispatch (action) {
      const {type} = action
      switch (type) {
        default:
          Logger.warn(`Unknown action dispatched: ${type}`)
      }
    },
    doSomething () {
      Logger.info('hello')
    }
  }
})
