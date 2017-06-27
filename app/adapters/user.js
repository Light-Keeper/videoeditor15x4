"use strict";
import DS from 'ember-data';
import google from '../lib/google';

export default DS.Adapter.extend({
  findAll(){
    return google.then(g => {
      let x = g.getUser();
      console.log(x);
      return [x];
    });
  }
});
