const {Router} = require('express')
const TareaCtrl = require('../controllers/tarea.controller')
const route= Router()


route.get('/',TareaCtrl.obtener)
route.get('/:id',TareaCtrl.obteneruno)
route.post('/',TareaCtrl.crear)
route.put('/:id',TareaCtrl.actualizar)
route.delete('/:id',TareaCtrl.eliminar)

module.exports = route