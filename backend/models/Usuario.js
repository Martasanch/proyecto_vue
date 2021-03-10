const mongoose= require("mongoose")
const {Model, Schema}=mongoose


const schemaUsuario=new Schema({
    nombre: {
        type:String,
    },
    apellido: {
        type:String,
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    },
    telefono: {
        type:String,
    },
    
    })
    
    
    class Usuario extends Model{

    }
    
   
    schemaUsuario.loadClass(Usuario)  //Para añadir la clase usuario al esquema (las unifico)
    module.exports=mongoose.model('usuario',schemaUsuario) //'usuario' es el nombre que le pongo a la colección de mongo