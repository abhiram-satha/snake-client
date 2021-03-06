const net = require('net');
const {IP, PORT, } = require('./constants');


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    
  });

  //interpret incoming data as test
  conn.setEncoding('utf8');


  conn.on('connect', () => {
    console.log('Connected');
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to game server');
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: ABI');
  });

  // conn.on('connect', () => {
  //     conn.write('Move: up')
  //     //conn.end();
  //   });

  // conn.on('connect', () => {
  //   setInterval(movement, 500);
  // });

  // function movement () {
  //   conn.write('Move: left')
  // }
  
  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: up')
  //   }, 1000);
  // });




  conn.on('data', (event) => {
    console.log(event);
    conn.end();
  });

  return conn;
};

module.exports = {
  connect
};

