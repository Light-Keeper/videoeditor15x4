"use strict";
import DS from 'ember-data';

export default DS.Adapter.extend({
  findRecord(){
    console.log("findRecord");
    console.log(arguments);
    return null;
  },

  createRecord(){
    console.log("createRecord");
    console.log(arguments);
    return null;
  },

  updateRecord(){
    console.log("updateRecord");
    console.log(arguments);
    return null;
  },

  deleteRecord(){
    console.log("deleteRecord");
    console.log(arguments);
    return null;
  },

  findAll(){
    console.log("findAll");
    console.log(arguments);
  },

  query(){
    console.log("query");
    console.log(arguments);
    return null;
  }
});
