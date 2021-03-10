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

//Loguear usuario
daoUsuarios.login=function login(email, password){ //se accede a la bd por las funciones de mongoose
  return new Promise((resolved,reject)=>{
  Usuario.findOne( {email:email})
  .then(data=>{
    console.log(data) //si encuentra un usuario lo muestra por consola, si no lo encuentra devuelve null
    if(data){ //si tiene informacion he encontrado un usuario
      if(data.password==password)
      resolved(data)
      else{
        resolved(null) //el password no coincide
      }

    }
    else{
      resolved(null) //no he encontrado al usuario
    }
//me voy al rtMain
  })
})
}

module.exports = daoUsuarios;
