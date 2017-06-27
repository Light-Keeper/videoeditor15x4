"use strict";
let googleLoader = require('npm:google-client-api');
googleLoader = googleLoader.default;

const CLIENT_ID = "1042225896709-e879t3153tatpa38irn4ukscfrdl9vfd.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

let gapi = null;

class GoogleApiConnector {

  singIn() {
    return gapi.auth2.getAuthInstance().signIn();
  }

  singOut() {
    return gapi.auth2.getAuthInstance().signOut();
  }

  isSignedIn() {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  getUser() {
    if (this.isSignedIn() == false) {
      return {
        id: 0,
        signedin: false
      }
    }

    let user = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    return {
      singedin: true,
      id: user.getId(),
      name: user.getName(),
      givenName: user.getGivenName(),
      familyName: user.getFamilyName(),
      imageUrl: user.getImageUrl(),
      email: user.getEmail()
    }
  }
}


let result = googleLoader()
  .then( ( _gapi ) => {
    gapi = _gapi;
    return gapi.load('client:auth2');
  })
  .then(() => {
    return gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(x => Promise.resolve(x), e => Promise.reject(e));
  })
  .then(() => {
    return new GoogleApiConnector();
  })
  .catch(e => {
    console.log(e);
    return Promise.reject();
  }) ;

export default result;

