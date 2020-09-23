
//const { connect } = require('./client');
//const { connect } = require('./client');
const { stdin } = require('process');
// console.log({connect});
// console.log('++++++++++++++++++');
// // console.log(connect);
// console.log('++++++++++++++++++');
// console.log(connect());
// console.log('++++++++++++++++++');
// // console.log(connect.connect());
// console.log('++++++++++++++++++');
// console.log(connect[Function]);
// console.log('++++++++++++++++++');

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

  //console.log(connection);
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
  return stdin;

}

// connection.on('data', () => {connection.write("Move: up")})
//connect();
//conn.on('connect', () => {conn.write("Move: up")});
// if( key === '\u0077' ){ connection.on('data', () =>  connection.write("Move: up"))
//     }

module.exports = {setupInput};
// exports.cn = connection;
//module.exports = {handleUserInput};
