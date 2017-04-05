import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('person', this.get('store').createRecord('person', {
      first_name: 'John',
      last_name: 'Doe'
    }));
  }
});
