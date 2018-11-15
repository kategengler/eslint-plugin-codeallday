/**
 * @fileoverview Preferred eslint configuration of Code All Day LLC
 * @author Katie Gengler
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname  + "/rules"),
  configurations: {
    recommended: require('./config/formatting'),
  }
};



