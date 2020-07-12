//Traigo express y le aplico un parametro
const express = require('express')
const router = express.Router();

//Requiero el controlador
const sucursalesController = require('../controllers/sucursalesController')

//Traigo y llevo información al controlador
router.get('/',sucursalesController.index)
router.get('/:sucursal',sucursalesController.sucursal)

//Exporto la información
module.exports = router