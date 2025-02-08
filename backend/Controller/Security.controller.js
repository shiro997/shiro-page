const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user.js');
const config = require('../config.js');

class SecurityController{
  constructor(){
  }

  createUser = async (req,res)=>{
    const { Email, Password , UsrName } = req.body;
    User.findOne({Email}).then((u)=>{
      if(u){
        return res.json({msj:'ya existe un usuario con ese E-mail!!'});
      }else{
        bcrypt.hash(Password,10,(error,passhashed)=>{
          if(error) res.json(error);
          else{
            let newUser = new User({
              UsrName: UsrName,
              Email: Email,
              Password: passhashed
            });
            newUser.save().then((usr)=>{
              res.json(usr);
            }).catch(error=>res.json(error));
          }
        });
      }
    });
  }

  getUsers = async (req,res) => {
    let usrs = [];
    User.find().then((us) => {
      us.forEach(u => {
        usrs.push(u);
      });
      res.json(usrs);
    });
  }

  Login = async (req,res)=>{
    let secret = config.SECRET;
    
    const {Email,Password} = req.body;

    let token;

    User.findOne({Email}).then((usr)=>{
      if(!usr){
        return res.json({msj:'Usuario no encontrado!'});
      }
      else{
        bcrypt.compare(Password,usr.Password).then((isMatch)=>{
          if(isMatch){
            const {UsrName,Email,_id} = usr;

            token = jwt.sign({
              UsrName, Email,exp: Date.now()+ 300*1000
            },secret)

            res.json({
              msj:'Usuario logeado correctamente',
              User:{
                UsrName,Email,_id
              },
              Token: token
            });
          }else{
            res.json({msj:'Contraseña incorrecta!'});
          }
        
        });

      }
    })

  }
 
}

module.exports = new SecurityController();