import Ember from 'ember';
import google from '../lib/google';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('user').then(data => data.get('firstObject'));
  },

  actions: {
    doLogin: function() {
      console.log("hello!!!");
      google
        .then(g => g.singIn())
        .then(()=> {
          this.refresh();
        })
        .catch((e) => console.error(e));
    },

    doLogout: function () {
      google
        .then(g => g.singOut())
        .then(()=> {
          this.refresh();
        })
        .catch((e) => console.error(e));
    }
  }
});
