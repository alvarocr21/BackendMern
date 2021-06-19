const {Router} = require('express')
const PruebaCtrl = require('../controllers/prueba.controller')
const route= Router()


route.get('/',PruebaCtrl.obtener)
route.post('/',PruebaCtrl.crear)
route.put('/',PruebaCtrl.actualizar)
route.delete('/',PruebaCtrl.eliminar)

module.exports = route