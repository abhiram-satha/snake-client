let connection;

const handleUserInput = function(data) {
  
  switch (data) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case '\u0003':
    console.log('Quitter');
    process.exit();
    break;
  }

};

const speechInput = function(data) {
  
  if (data === "5") {
    connection.write('Say: HELLLO');
  } else if (data === '4') {
    connection.write('Say: Slytherin thru');
  } else if (data === '6') {
    connection.write('Say: SSSSSSSS');
  }

};



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  stdin.on('data', speechInput);
  return stdin;
};



module.exports = {
  setupInput
};