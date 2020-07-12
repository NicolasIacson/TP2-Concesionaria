//Traigo y ejecuto express
const express = require('express')
const app = express()

//Traigo las rutas
const routeHomePage = require('./routes/homePage')
const routeSucursales = require('./routes/sucursales')
const routeMarcas = require('./routes/marcas')
const routeAutos = require('./routes/autos')

//Abro el servidor en el puerto 3030
let puerto = 3030
app.listen(puerto, ()=>console.log("Server levantado en el puerto " + puerto))

//Redirecciono las rutas
app.use('/',routeHomePage)
app.use('/sucursales',routeSucursales)
app.use('/marcas',routeMarcas)
app.use('/autos',routeAutos)