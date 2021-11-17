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
      console.log('Quitter')
      process.exit();
    break;
  } 

}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}



module.exports = {
  setupInput
};