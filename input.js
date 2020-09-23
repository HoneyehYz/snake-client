
const { stdin } = require('process');
const handleUserInput = function(){
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;

}


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}





module.exports = {setupInput};
//module.exports = {handleUserInput};
