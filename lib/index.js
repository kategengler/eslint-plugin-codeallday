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
  configs: {
    recommended: require('./config/recommended'),
    ember: require('./config/ember'),
    prettier: require('./config/prettier'),
    formatting: require('./config/formatting'),
  }
};



