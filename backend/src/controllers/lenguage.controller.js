const lenguageCtrl = {};
const Lenguage = require ('../models/Lenguage.model')

lenguageCtrl.getLenguages = async(req,res)=>{
    const lenguages =  await  Lenguage.find();
      res.json(lenguages)
  }

  

  lenguageCtrl.createLenguage = async(req, res)=>{
    try {
        const {
            key,
            lenguage} = req.body;

        const newLenguage= new Lenguage({
            key,
            lenguage});
        await newLenguage.save();
        console.log("idioma creado")
        res.json(newLenguage)
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
}

lenguageCtrl.getLenguage = async(req, res) => {
    try {
        const lenguage = await Lenguage.findById(req.params.id)
        res.json(lenguage)
    } catch (error) {
        res.status(400).json
    }
}
module.exports= lenguageCtrl;