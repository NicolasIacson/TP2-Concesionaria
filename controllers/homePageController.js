//Traigo fs
const fs = require('fs')

//Traigo los datos de concesionaria y lo parseo
let concesionariaArray = fs.readFileSync('./data/concesionarias.json','utf-8')
let concesionariaObjeto = JSON.parse(concesionariaArray)

//vista
const homePage = {
    index:(req,res)=>{
        res.write('\n\n'+ '-Bienvenido a nuestro sitio web' + '\n\n')
        res.write("_________________________________________________" + '\n\n')
        res.write('-Esta es una lista de nuestras concesionarias'+ '\n\n')
        concesionariaObjeto.forEach((concesionaria)=>{            
            res.write("." + concesionaria.sucursal + '\n');    
        })
        res.write("_________________________________________________")
        res.end()
    }
}

module.exports = homePage