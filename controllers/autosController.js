//Traigo fs
const fs = require('fs')

//Traigo los datos de concesionaria y lo parseo
let concesionariaArray = fs.readFileSync('./data/concesionarias.json','utf-8')
let concesionariaObjeto = JSON.parse(concesionariaArray)

//vista
const autos = {
    index: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let autos = []
        concesionariaObjeto.forEach((concesionaria)=>{
            concesionaria.autos.forEach(auto=>{
                autos.push(auto)
            })
        })
        autos.forEach(auto=>{
            res.write("Marca: " + auto.marca + "\n");
            res.write("Modelo: " + auto.modelo + "\n");
            res.write("Año: " + auto.anio + "\n");
            res.write("Color: " + auto.color + "\n");
            res.write("_____________________________________________" + "\n\n");
        })
        res.end()
    },
    marca: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.marca;
        let autos = []
        concesionariaObjeto.forEach((concesionaria)=>{
            concesionaria.autos.forEach(auto=>{
                autos.push(auto)
            })
        })
        autos.forEach(auto=>{
            if(auto.marca ==id){
                res.write("Modelo: " + auto.modelo + "\n")
                res.write("Año: " + auto.anio + "\n")
                res.write("Color: " + auto.color + "\n")
                res.write("____________________________________________" + "\n")
                
            }
        })
        res.end()
    }

}

module.exports = autos