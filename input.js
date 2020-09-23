const { IP, PORT } = require('./constants');
const { stdin } = require('process');


let connection; 




const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function(){

  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } 
  });
  stdin.on('data', (key) => {
    if (key === '\u0077') {
      connection.write("Move: up");
    } 
  });
  stdin.on('data', (key) => {
    if (key === '\u0061') {
      connection.write("Move: left");
    } 
  });
  stdin.on('data', (key) => {
    if (key === '\u0073') {
      connection.write("Move: down");
    } 
  });
  stdin.on('data', (key) => {
    if (key === '\u0064') {
      connection.write("Move: right");
    } 
  });

  stdin.on('data', (key) => {
    if (key === '\u006C') {
      connection.write("Say: yayyyy");
    } 
  });





}


module.exports = {setupInput};