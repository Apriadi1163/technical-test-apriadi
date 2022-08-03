const {provinsi, kabupaten} = require("../../models")

exports.addProvinsi = async(req, res) => {
    try{
        // const data = req.body;
        const data = {
            nama: req.body.nama,
            diresmikan: req.body.diresmikan,
            pulau: req.body.pulau,
            image: req.file.filename,
        };
        // if (req.file) {
        //     data.image = req.file.filename;
        // }
        const createData = await provinsi.create(data);

        let createDataProvinsi = await provinsi.findOne({
            where:{
                id: createData.id,
            },
            include:[
                {
                    model: kabupaten,
                    as: "kabupaten",
                }
            ]
        });

        createDataProvinsi = JSON.parse(JSON.stringify(createDataProvinsi));

        res.send({
            status: "success",
            data: {
                ...createDataProvinsi,
                image: process.env.PATH_FILE + createDataProvinsi.image,
            }
        });
    }catch (error) {
        console.log(error);
        res.send({
          status: "failed",
          message: "server error",
        });
    }
};

exports.getProvinsis = async (req, res) => {
    try{
        let data = await provinsi.findAll({
            include:{
                model: kabupaten,
                as: "kabupaten",
            },
        });

        res.send({
            status: "success",
            data,
        })
    }catch(error){
        console.log(error);
        res.send({
            status: "failed",
            message: "server error",
        });
    }
};

exports.getProvinsi = async (req, res) => {
    try{
        const {id} = req.params;
        const data = await provinsi.findAll({
            where:{id},
        });

        res.send({
            status: "success",
            data,
        });
    }catch(error){
        console.log(error);
        res.send({
            status:"failed",
            message: "server error",
        });
    }
};

exports.updateProvinsi = async (req, res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        let updateProvinsi = await provinsi.update({
            ...data,
            image: req.file.filename,
        }, {where:{id}});

        updateProvinsi = JSON.parse(JSON.stringify(data));

        updateProvinsi = {
            ...updateProvinsi,
            image: process.env.PATH_FILE + req.file.filename,
        };

        res.status(200).send({
            status: "success",
            updateProvinsi,
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            status:"failed",
            meesage:"server error",
        })
    }
}

exports.deleteProvinsi = async (req, res) => {
    try{
        const {id} = req.params;
        await provinsi.destroy({
            where:{id},
        });

        res.send({
            status: "failed",
            message: `Delete provinsi id: ${id} finished`,
        });
    }catch(error){
        console.log(error);
        res.send({
            status:"failed",
            message: "server error",
        })
    }
}