const express=require("express");
const bookController=require("../Controller/BookController")
const router=express.Router();
router.post("/data",bookController.create)
router.get("/",bookController.index)
router.delete("/:id",bookController.trash)
router.put("/:id",bookController.update)
router.get('/:id', bookController.single)
module.exports=router