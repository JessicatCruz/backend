const Box = require("../models/box");
const File = require("../models/File");

class FileController{
    async store(req,res){    
        const box = await Box.findById(req.params.id);

        const file = await File.create({
            title: req.file.originalname, 
            Path: req.file.key
        });

        box.files.push(file);

        await box.save(box._id);

        req.io.sockets.in().emit('file',file)

        return res.json(file);         
    }  
}

module.exports = new FileController();