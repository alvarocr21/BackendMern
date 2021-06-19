const PruebaCtrl = {}

PruebaCtrl.obtener=(requ,res)=>{
    res.send('funcionando');
}

PruebaCtrl.crear = (requ,res)=>{
    res.send('Creado')
}

PruebaCtrl.actualizar = (requ,res)=>{
    res.send('Actualizado')
}

PruebaCtrl.eliminar = (requ,res)=>{
    res.send('Eliminado')
}


module.exports = PruebaCtrl