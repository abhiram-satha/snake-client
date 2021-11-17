const { connect } = require('./client');
const { setupInput} = require('./input');
//const {stdin} = require('process')
//establishes a connect with the game server

//setup interface to handle user input from stdin



console.log('Connecting...');


setupInput(connect());

