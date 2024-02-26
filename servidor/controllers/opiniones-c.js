const opinionesModel = require("../models/opiniones-m")

class opinionesControllers {
    async mostrar(req, res, next) {
        try {
            const campos = await opinionesModel.find();
            console.log(typeof(campos), campos)
            res.send(campos).status('200'); 
        } catch (error) {
            console.log("Hubo algún error", error); 
            res.status('404').json({"algún error":error})
        }
    }

    async crear(req, res, next) {  
        const {nombre, correo, fecha, edad, opinion} = req.body;
        try {
            const campos = {nombre, correo, fecha, edad, opinion};
            console.log('agregar:', campos)
            await opinionesModel.create(campos);
            res.json({"agregado": "se agregado"}).status('200');  
        } catch (error) {
            console.log('Hubo algún error', error); 
            res.status('404').json({"error":error})
        }
    }
}

module.exports = new opinionesControllers();
