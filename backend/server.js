const express=require('express')
const app=express()
const rtMain=require('./routers/rtMain')
const conexion=require ('./conexion')

//middleware
app.use(express.json())

//enrutadores

app.use('/api', rtMain)


//base de datos mongodb
conexion.on('error', console.error.bind(console, "Error de conexion mongo"))
conexion.once('open', () => console.log("Conexión mongo OK!!"))




app.listen(8081,(err)=>{ //elegir un puerto distinto al de vue, ya que ese estará ocupado
    if(err) console.log("Errores: ", err)
    console.log("Servidor backend arrancado en 8081")

})