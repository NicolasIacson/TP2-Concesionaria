//Traigo express y le aplico un parametro
const express = require('express')
const router = express.Router();

//Requiero el controlador
const homePageController = require('../controllers/homePageController')

//Traigo y llevo información al controlador
router.get('/',homePageController.index)

//Exporto la información
module.exports = router