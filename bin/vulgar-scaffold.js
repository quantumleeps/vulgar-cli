#!/usr/bin/env node

'use strict';

//# vulgar init

//** Import dependencies
var program = require('commander'),
      utils = require('../lib/generate.js');

program
  .description('Generate scaffolding for a MEAN component')
  .option('-r, --ng-route <name>', 'Create a new routable Angular component for the front-end')
  .option('-c, --ng-component <name>', 'Create a new standalone Angular component for the front-end')
  .parse(process.argv);

var options = {
  name: program.args.length ? program.args[0] : 'doohickey'
};

utils.generateNgRoute(options);