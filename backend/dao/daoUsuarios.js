const Usuario = require("../models/Usuario")

const daoUsuarios = {};

//Guardar

daoUsuarios.guardar = function guardar(usuario) {
  return new Promise((resolved, reject) => {
    let nuevoUsuario = new Usuario(usuario)
    console.log(nuevoUsuario)
    nuevoUsuario
      .save()
      .then(() => {

        resolved(nuevoUsuario);
      })
      .catch((err) => reject(err))
  })
}




module.exports = daoUsuarios;
