//import { connect } from './client.js';
const { IP, PORT } = require('./constants');
const { connect } = require('./client');
const { setupInput} = require('./input');
const net = require('net');
//const { PORT } = require('./constants');


console.log('Connecting ...');
//console.log(connection);
//connect();
setupInput(connect(IP,PORT));

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// const handleUserInput = function(){
//   stdin.on('data', (key) => {
//     if (key === '\u0003') {
//       process.exit();
//     }
//   });
//   return stdin;

// }

// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   return stdin;
// }



// setupInput(handleUserInput());




// stdin.on('data', (key) => {
  // if (key === '\u0003') {
  //   process.exit();
  // }
//   process.stdout.write('.');
// });