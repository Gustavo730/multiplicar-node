
const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    demand: true,
    alias: 'l'
  }
}

const argv = require('yargs')
  .command('listar','Imprime en consola la tabla de multiplicar', opts)
  .command('crear', 'Crea el archivo', opts)
  .help()
  .argv;


module.exports = {
  argv
}
