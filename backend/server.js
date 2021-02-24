const express=require('express')
const app=express()

//middleware
app.use(express.json())






app.get('/api/welcome', (req,res)=>{
    res.json({
        saludo:'Hola Mundo'
    })
})


app.post('/api/nuevo', (req,res)=>{
    let datos=req.body
    console.log("Esto llega deste el cliente. Guardado en la bd",datos)
    res.json({
        respuesta:'Datos recibidos',
        datos:datos
    })
})

app.listen(8081,(err)=>{ //elegir un puerto distinto al de vue, ya que ese estará ocupado
    if(err) console.log("Errores: ", err)
    console.log("Servidor backend arrancado en 8081")

})