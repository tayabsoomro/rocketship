"use strict";

var path = require('path');

// Firebase App:

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: "AIzaSyB9_uABeJDqnXWXKyjiAFbZ6LibVpXIhC8",
  authDomain: "rocketship-b775a.firebaseapp.com",
  databaseURL: "https://rocketship-b775a.firebaseio.com",
  projectId: "rocketship-b775a",
  storageBucket: "",
  messagingSenderId: "640043470073"
};

const fire = _firebase2.default.initializeApp(config)

exports.default = fire;
