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

//listar
daoUsuarios.listar=function find(){
    return new Promise((resolved, rejet)=>{
        resolved(Usuario.find().lean())
    })

}

//Eliminar
daoUsuarios.eliminar=function eliminar(id){
Usuario.findOneAndRemove({_id:id})
.then(datos=>console.log(datos))
}



module.exports = daoUsuarios;
