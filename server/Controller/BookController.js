const Bookmodel = require("../model/bookStoremodel")

exports.create = async (req, res) => {
    const { name, author, establish, description } = req.body;
    try {
        if (name === "" || author === "" || establish === "") {
            res.json({ success: false, message: "filed are required" })
        }
        const user=await Bookmodel.findOne({author:author});
        if(user){
            res.json({success:false,message:"author is already exists"})
        }
        else{
            const bmd = new Bookmodel({
                name, author, establish,description
            })
            bmd.save().then((data) => { res.json({ success: true, message: "Book has been inserted👍" }) })
                .catch((err) => { console.log(err) })
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.index=async (req,res)=>{
    try{
            const user=await Bookmodel.find();
            if(user){
                res.json({
                    user:user
                })
            }
           
    }
    catch(err){
        console.log(err);
    }
}
exports.trash=async (req,res)=>{
    
    try{
        const id=req.params.id;
            await Bookmodel.deleteOne({_id:id}).then(()=>{
                res.json({success:true,message:"data has been deleted"})
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    catch(err){
        console.log(err);
    }
}
exports.update=async (req,res)=>{
    try{
        const id=req.params.id;
        const bmd=await Bookmodel.findByIdAndUpdate(
            {_id:id},
            {
                name:req.body.name,
                author:req.body.author,
                establish:req.body.establish,
                description:req.body.description,
            }
        )
        if(bmd){
            res.json({success:true,message:"data has been update"})
        }
        else{
            res.json({success:false,message:"data not updated"})
        }
    }
    catch(err){
        console.log(err);
    }
}
 exports.single = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Bookmodel.findById(id)
        if (user) {
            res.json({
                success: true,
                user
            })
        } else {
            res.json({
                success: false,
                message: "Book Record not found"
            })
        }
    } catch (error) {
        res.json(error.message)
    }
}