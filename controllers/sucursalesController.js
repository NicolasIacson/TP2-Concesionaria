//Traigo fs
const fs = require('fs')
const autos = require('./autosController')

//Traigo los datos de concesionaria y lo parseo
let concesionariaArray = fs.readFileSync('./data/concesionarias.json','utf-8')
let concesionariaObjeto = JSON.parse(concesionariaArray)

//vista
const sucursales = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('\n\n' + '-Nuestras sucursales en detalle' + '\n\n')
        res.write("__________________________________________________________________________________________________" + '\n\n')
        concesionariaObjeto.forEach(concesionaria => {
            res.write("Sucursal: " + concesionaria.sucursal + "\n" + "direccion: " + concesionaria.direccion + "\n" + "telefono: " + concesionaria.telefono + "\n\n")
        });
        res.write("__________________________________________________________________________________________________" + '\n\n')
        res.end()
    },
    sucursal:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        concesionariaObjeto.forEach(concesionaria => {
            if(concesionaria.sucursal == req.params.sucursal){
                res.write("__________________________________________________________________________________________________")
                res.write('\n\n' + '-Sucursal: ' + concesionaria.sucursal + '\n\n' + '.direccion: ' + concesionaria.direccion + '\n' + '.telefono: ' + concesionaria.telefono + '\n')
                res.write("__________________________________________________________________________________________________" + '\n\n')
                res.write('-Nuestro stock de autos' + '\n')
                res.write('Cantidad Total: ' + concesionaria.autos.length + '\n\n')
                concesionaria.autos.forEach(autos => {
                    res.write('.Marca: ' + autos.marca + '\n')
                    res.write('.Modelo: ' + autos.modelo + '\n')
                    res.write('.Año: ' + autos.anio + '\n')
                    res.write('.Color: ' + autos.color + '\n\n')
                });
                res.end()
            }
        });
        res.end('No se a encontrado esa concesianaria')
    }
}

module.exports = sucursales