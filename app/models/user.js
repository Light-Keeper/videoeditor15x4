import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  singedin: DS.attr('boolean')
});
