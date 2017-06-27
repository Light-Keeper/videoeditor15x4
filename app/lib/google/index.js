"use strict";
let googleLoader = require( 'google-client-api' );

const CLIENT_ID = "1042225896709-e879t3153tatpa38irn4ukscfrdl9vfd.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

class GoogleApiConnector {
  initialize(gapi) {
    this.gapi = gapi;
    this._signedIn = false;
    this._updateSigninStatus = this._updateSigninStatus.bind(this);
    this.gapi.load('client:auth2', this._initClient);
  }

   _initClient() {
    this.gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    });
  }

  singIn() {
    return this.gapi.auth2.getAuthInstance().signIn();
  }

  singOut() {
    return this.gapi.auth2.getAuthInstance().signOut();
  }

  isSignedIn() {
    return this.gapi.auth2.getAuthInstance().isSignedIn.get();
  }
}


let result = googleLoader()
  .then( ( gapi ) =>  new GoogleApiConnector(gapi));

exports.default = result;

