const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
    
  });

  //interpret incoming data as test
  conn.setEncoding('utf8');


  conn.on('connect', () => {
    console.log('Connected');
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to game server')
  })

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: ABI')
  });
  
   conn.on('data', (event) => {
     console.log(event)
     conn.end();
   } )

  return conn;
};


module.exports = {
  connect,
};

