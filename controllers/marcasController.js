//Traigo fs
const fs = require('fs')

//Traigo los datos de concesionaria y lo parseo
let concesionariaArray = fs.readFileSync('./data/concesionarias.json','utf-8')
let concesionariaObjeto = JSON.parse(concesionariaArray)
let marcasArray = []
//vista
const marcas = {
    index:(req,res)=>{
        concesionariaObjeto.forEach(concesionaria=>{
            concesionaria.autos.forEach(autos=>{
                marcasArray.push(autos.marca)
            })
        });
        res.write('-Marcas que puedas encontrar en nuestras concesionarias')
        res.write('\n\n' + 'Lista' + '\n')
        res.write('_______________________________________________' + '\n')
        marcasArray = marcasArray.filter(function(a,b){return marcasArray.indexOf(a)===b})
        marcasArray.forEach(marcas=>{
            res.write('\n' + marcas)
        })
        res.end()
    },
    marca:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.marca;
        let marcas = []
        concesionariaObjeto.forEach((concesionaria)=>{
            concesionaria.autos.forEach(auto=>{
                marcas.push(auto)
            })
        })
        res.write('Todos nuestro autos de la marca ' + id + '\n\n')
        marcas.forEach(marca=>{
            if(marca.marca == id){
                res.write("_____________________________________" + "\n\n")
                res.write("Modelo: " +marca.modelo + "\n")
                res.write("Año: " + marca.anio + "\n")
                res.write("Color: " + marca.color + "\n")
                res.write("_____________________________________" + "\n")
            }
        })
        res.end()
    }
}

module.exports = marcas