import Ember from 'ember';

export default Ember.Controller.extend({
  submitClicked: 0,
  person: null,
  actions: {
    submit: function() {
      this.incrementProperty('submitClicked');
      this.get('person').save();
    }
  }
});
