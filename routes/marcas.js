//Traigo express y le aplico un parametro
const express = require('express')
const router = express.Router();

//Requiero el controlador
const marcasController = require('../controllers/marcasController')

//Traigo y llevo información al controlador
router.get('/',marcasController.index)
router.get('/:marca',marcasController.marca)


//Exporto la información
module.exports = router