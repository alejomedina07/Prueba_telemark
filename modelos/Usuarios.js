var  mongoose = require ('mongoose'),
  debug=require("debug")("tl:models:Usuarios"),
  Schema =  mongoose.Schema,
  Usuarios = new Schema ({
    nombres:String,
    apellidos:String,
    correo:String,
    usuarioRed:String,
    DNI:String,
    fechaNacimiento:Date,
    fechaBaja:Date,
  });

module.exports =  mongoose.model('usuario', Usuarios);
