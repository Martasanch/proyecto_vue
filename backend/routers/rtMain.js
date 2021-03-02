const express=require('express')
const rtMain=express.Router()
const daoUsuarios = require("../dao/daoUsuarios");
const fs = require('fs')


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
 
//Listado de usuarios
rtMain.get("/listar", async function (req, res) {
    let misUsuarios = await daoUsuarios.listar();
    //console.log(misUsuarios)
    res.json(misUsuarios)
  });
  

//Eliminar Usuario
rtMain.post('/eliminar', (req,res)=>{
   daoUsuarios.eliminar(req.body.id)
   res.json({respuesta: "eliminado ok"})
    })

//Idiomas
rtMain.get('/lang/:language',(req,res)=>{
  let lang=req.params.language
  console.log(lang)
  fs.readFile(`./locales/${lang}.json`,'utf8',(err,data)=>{
    res.json(JSON.parse(data))

  })
})


module.exports=rtMain