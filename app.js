const { crearAarchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearAarchivo( argv.b, argv.l, argv.h ).then( nombreArchivo => console.log(nombreArchivo) )
    .catch(err => console.log(err));
