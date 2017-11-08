var _ = require('lodash');
var chalk  = require('chalk');
var jsonfile = require('jsonfile')
console.log(chalk.blue('I')+chalk.green.bgRedBright('think')+chalk.cyan('chalk')+chalk.yellow('is'+chalk.blueBright('cool!!'))); 
var file = 'data.json'
var read =jsonfile.readFileSync(file, 'utf8');
  console.log(read);