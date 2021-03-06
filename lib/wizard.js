'use strict';

//# Initialization Wizard

//** Setup dependencies
var inquirer = require('inquirer'),
     install = require('./install'),
           _ = require('lodash');

//* Callback must be in the form `function(results)`
module.exports = function(options, indexCb) {

  function required(value) {
    return !!value.trim() || 'Required';
  }

  var questions = [{
    type: 'input',
    name: 'name',
    message: 'What would you have your MEAN app be called?',
    default: options.name,
    validate: required
  }];

  inquirer.prompt(questions, function(results) {
    console.log('');
    // Reference: https://lodash.com/docs#assign
    _.assign(options, results);
    install.init(options, indexCb);
  })
}
