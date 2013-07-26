var liquid = require('liquid-node');
var _ = require('lodash');

var plugin = function() {
  'use strict';

  var init = function(options) {
    // TODO: Is there any initial setup needed for liquid-node?
  };

  var compile = function(src, options, callback) {
    var tmpl;
    try {
      tmpl = liquid.Template.parse(src);
    } catch(ex) {
      callback(ex, null);
    }
    callback(null, tmpl);
  };

  var render = function(tmpl, options, callback) {
    try {
      if(typeof tmpl === 'string') {
        tmpl = liquid.Template.parse(tmpl);
      }
      tmpl.render(options).done(function(content) {
        callback(null, content);
      });
    } catch (ex) {
      callback(ex, null);
    }
  };

  var registerFunctions = function(helperFunctions) {
    // TODO: How does this fit with liquid-node?
  };

  var registerPartial = function(filename, content) {
    // TODO: How does this fit with liquid-node?
  };


  return {
    init: init,
    compile: compile,
    render: render,
    registerFunctions: registerFunctions,
    registerPartial: registerPartial,
    liquid: liquid
  };

};

module.exports = exports = plugin();
