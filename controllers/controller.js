const Info = require('../models/models')


// route.get('/', (req,res)=>{
//     Info.find()
//     .exec()
//     .then(result =>{
//         res.status(200).json(result);
//     })
//     .catch(err =>{
//         res.status(500).json({message:err});
//     });
// });
exports.allData = async(req,res)=>{
    try{
        const info= await Info.find();
        res.status(200).json(info);
    }catch (err){
        res.status(500).json({ message : err})
    }
};

exports.findById=(req,res)=>{
    const id = req.params.id;
    Info.findById(id)
    .exec()
    .then(result =>{
        (result)? res.status(200).json(result): res.status(404).json({message:"not found"})
    })
    .catch(err =>{
        res.status(500).json({message:err});
    });
};

exports.insertData = (req,res) =>{
    const info = new Info({
        name : req.body.name,
        rollno   :  req.body.rollno

    });
    info
    .save()
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log("invalid param"+err);
    });
};

exports.updateData = async (req,res)=>{
    try{
        const id = req.params.id;
        const updateId = await info.updateOne(
            {_id : id},
            {
                $set : {name : req.body.name, rollno : req.body.rollno}
            }
        );
        res.status(200).json({updateId});
    }catch (err){
        res.status(500).json({ message : err})
    }
};

exports.deleteData = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteId = await info.remove({_id : id});
        res.status(200).json(deleteId);
    }catch(err){
        res.status(500).json({message:err})
    }
}







