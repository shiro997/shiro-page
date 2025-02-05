const Device = require("../model/device.model.js");
class DeviceController{
  createDevices = async (req,res) => {
    const {Name} = req.body;
  
    Device.findOne({Name}).then((c)=>{
      if(c){
        return res.json({msg:'Ya existe este dispositivo!!!'});
      }else{
        let newdev = new Device({
          Name
        })
  
        newdev.save().then((nc)=>{
          res.json(nc);
        }).catch(error=>res.json(error));
      }
    });
  }
  
  getDevices = async (req,res)=>{
    let devs = [];
    Device.find().then((ds)=>{
      ds.forEach(d=>{
        devs.push(d);
      });
      res.json(devs);
    });
  }
}


module.exports = new DeviceController();