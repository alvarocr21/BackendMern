const TareaCtrl = {};
const Tarea = require("../models/Tarea");

TareaCtrl.obtener = async (req, res) => {
  const tareas = await Tarea.find();
  console.log(tareas);
  res.json(tareas);
};
TareaCtrl.obteneruno = async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  console.log(tarea);
  res.json(tarea);
};

TareaCtrl.crear = async (req, res) => {
  const { tarea, hecho } = req.body;
  const Nuevoregistro = new Tarea({
    tarea,
    hecho,
  });
  await Nuevoregistro.save();
  res.json({ status: 201, mensaje: "Creado" });
};

TareaCtrl.actualizar = async (req, res) => {
  const { tarea, hecho } = req.body;
  const Actualizaregistro = {
    tarea,
    hecho,
  };
  console.log(req.params.id);
  await Tarea.findByIdAndUpdate(req.params.id, Actualizaregistro);
  res.json({ status: "Tarea actualizada" });
};

TareaCtrl.eliminar = async(req, res) => {
    await Tarea.findByIdAndRemove(req.params.id);
    res.json({status:'Tarea eliminada'})
};

module.exports = TareaCtrl;
