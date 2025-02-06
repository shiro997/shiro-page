const bcrypt = require('bcrypt');
const User = require('../model/user.model');

class SecurityController{
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

  /*Login = async (req,res)}=>{
  
  }*/
 
}

module.exports = new SecurityController();