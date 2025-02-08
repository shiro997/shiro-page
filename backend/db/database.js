const mongoose = require('mongoose');


//Shiro997-Yggdrasil
//kS8nCrUM8L3kMnFB
//mongodb+srv://Shiro997-Yggdrasil:kS8nCrUM8L3kMnFB@cluster0.eabutku.mongodb.net/
//mongodb://localhost:27017/

const db = async ()=> {
  await mongoose.connect('mongodb+srv://Shiro997-Yggdrasil:kS8nCrUM8L3kMnFB@cluster0.eabutku.mongodb.net/Shiroservice').then(()=>{
    console.log('Habemus Mogoes');
  }).catch(error=> console.log(error));
}

module.exports = db;