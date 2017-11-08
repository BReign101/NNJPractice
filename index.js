var file = require('lodash');
var chalk       = require('chalk');
var jsonfile = require('jsonfile')
var file = 'data.json'
var read =jsonfile.readFileSync(file, 'utf8');
  console.log(read);
