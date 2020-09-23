const { IP, PORT } = require('./constants');
const { Server } = require('http');
const net = require('net');


/**
 * Establishes connection with the game server
 */
const connect = function(IP,PORT) {
  //console.log(IP);
  //console.log(PORT);
  const conn = net.createConnection({port: PORT, host: IP});
  //console.log(conn);
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {console.log('Successfully connected to game server');});
  
  //conn.on('connect', () => {conn.write("Move: up")});
  conn.on('data', (data) => {
  console.log('Server says: ', data);
  console.log('Name: ', "HYZ");
  ;
  
});

  

  return conn;
}

connect(IP,PORT);

module.exports = {connect};


// const net = require('net');

// const conn = net.createConnection({ 
//   host: IP, // change to IP address of computer or ngrok host if tunneling
//   port: PORT // or change to the ngrok port if tunneling
// });
// conn.on('connect', () => {
//   conn.write('Hello from client!');
// });
// conn.on('data', (data) => {
//   console.log('Server says: ', data);
//   console.log('Message from client: ', data)
// });

// conn.setEncoding('utf8'); // interpret data as text





// ////Server


// const net = require('net');

// const server = net.createServer();
// server.on('connection', (client) => {
//   console.log('New client connected!');
//   client.write('Hello there!');
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000!');
  
// });

