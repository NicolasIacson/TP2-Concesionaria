//Traigo express y le aplico un parametro
const express = require('express')
const router = express.Router();

//Requiero el controlador
const autosController = require('../controllers/autosController')

//Traigo y llevo información al controlador
router.get('/',autosController.index)
router.get('/:marca',autosController.marca)

//Exporto la información
module.exports = router