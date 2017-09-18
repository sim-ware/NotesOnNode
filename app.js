console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Samir', 1, 'Samir', 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Samir'));

// console.log('Result:', notes.addTime(11, -9));

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
