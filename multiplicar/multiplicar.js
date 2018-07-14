// Require propio de Node
const fs = require('fs');
const colors = require('colors');

//Require que se instala, no nativo de Node
//const fs = require('express');

//Require propios que se crearon en el proyecto
//const fs = require('./pathDelRequire');


let listarTabla = (base, limite = 10) =>{

  console.log(`* * * * * Tabla del ${base} * * * * *`.green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base*i}\n`);
  }
}


let crearArchivo = (base, limite = 10) =>{
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor introducido "${base}" debe ser numérico`);
      return;
    }

    if (!Number(limite)) {
      reject(`El valor introducido "${limite}" debe ser numérico`);
      return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base*i}\n`;
    }
    fs.writeFile(`files/tabla-${base}.txt`,data, (err) => {
      if (err){
        reject(err);
      }else{
        resolve(`tabla-${base}-al-${limite}.txt`);
      }
    });

  });
}


module.exports = {
  crearArchivo,
  listarTabla
}
