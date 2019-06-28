var express = require('express'),
  debug=require("debug")("tl:usuario"),
  ObjectId = require('mongoose').Types.ObjectId,
  Usuarios=require('../modelos/Usuarios'),
  router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/users", function(req, res) {
  Usuarios.find().sort( { nombres: 1 } )
  .then(function(respuesta) {
    res.json(respuesta);
  })
  .catch(function(error) {
    res.json('Error al cargar datos');
  });
});

router.get("/edit-user/:id", function(req, res) {
  Usuarios.findById(req.params.id)
  .then(function(respuesta) {
    res.json(respuesta);
  })
  .catch(function(error) {
    res.json('Error al cargar datos');
  });
});

router.get("/delete/:id", function(req, res) {
  Usuarios.findById(req.params.id)
  .then(function(respuesta) {
    return respuesta.remove();
  })
  .then(function(respuesta) {
    res.json(respuesta);
  })
  .catch(function(error) {
    debug(error);
    res.json('Error al cargar datos');
  });
});

router.post("/users", function(req, res) {
  var nuevoUsuario = new Usuarios(req.body);
  nuevoUsuario.save()
  .then(function(respuesta) {
    res.json('Se guardo el registro correctamente');
  })
  .catch(function(error) {
    res.json('Error al guardar');
  });
});

router.post("/edit-user/:id", function(req, res) {
  debug('edit post');
  debug(req.body);
  Usuarios.findById(req.params.id)
  .then(function(respuesta) {
    debug(1);
    respuesta.nombres = req.body.nombres;
    respuesta.apellidos = req.body.apellidos;
    respuesta.correo = req.body.correo;
    respuesta.usuarioRed = req.body.usuarioRed;
    respuesta.DNI = req.body.DNI;
    respuesta.fechaNacimiento = req.body.fechaNacimiento;
    respuesta.fechaBaja = req.body.fechaBaja;
    debug('respuesta');
    debug(respuesta);
    return respuesta.save();
  })
  .then(function(respuesta) {
    res.json('Se guardo el registro correctamente');
  })
  .catch(function(error) {
    res.json('Error al guardar');
  });
});

module.exports = router;
