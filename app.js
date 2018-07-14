// Require propio de Node
// const fs = require('fs');

// Require que se instala, no nativo de Node
// const fs = require('express');

// Require propios que se crearon en el proyecto
// const fs = require('./pathDelRequire');

// Al no mencionar el path se refiere al paquete

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite).then(archivo =>{
      console.log(`Archivo Creado ${archivo.green}`);
    }).catch(err => {
      console.log(err.red);
    });
    break;

  default:
    console.log('Comando no reconocido');

}
