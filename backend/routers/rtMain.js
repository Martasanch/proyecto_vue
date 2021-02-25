const express=require('express')
const rtMain=express.Router()
const daoUsuarios = require("../dao/daoUsuarios");



rtMain.get('/welcome', (req,res)=>{
    res.json({
        saludo:'Hola Mundo'
    })
})
//Guardar usuario
rtMain.post("/guardar", function (req, res) {
    daoUsuarios
      .guardar(req.body)
        .then((resp) => {
          res.json({ 
              respuesta:'Guardado en Mongo'
          });
        })
        .catch((err) => {
      
        });
  });
 
  
 //esto solo lo enviaba y lo mostraba por consola 
/* rtMain.post('/nuevo', (req,res)=>{
    let datos=req.body
    console.log("Esto llega deste el cliente. Guardado en la bd",datos)
    res.json({
        respuesta:'Datos recibidos',
        datos:datos
    })
}) */

module.exports=rtMain