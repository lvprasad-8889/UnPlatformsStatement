const express=require('express');
const router=express.Router();
const db=require('./models');


router.get("/completedata",(req,res)=>{
    db.posttable.findAll().then((posttabledata)=>{
        res.send(posttabledata);
    })
    .catch((err)=>{
        console.log("err in fetching data ",err)
    })
})

router.post("/new",(req,res)=>{
    db.posttable.create({
        views:0,
        likes:0,
        comments:[],
        shares:0
      })
    .then((toad)=>{res.send(toad)})
    .catch((err)=>{
        console.log("err in creating data ",err)
    })
    
})

router.put("/upd",(req,res)=>{
    console.log("entering in to put",req.body)
    db.posttable.update({views:req.body.views,likes:req.body.likes,comments:req.body.comments,shares:req.body.shares},
        {where:{
        id:req.body.id
    }})
    .then(()=>{res.send("success")})
    .catch((err)=>{
        console.log("err in updating  data 1 ",err)
    })
})

router.put("/put",(req,res)=>{
    console.log("entering in to put",req.body)
    db.posttable.update({views:req.body.views},
        {where:{
        id:req.body.id
    }})
    .then(()=>{res.send("success")})
    .catch((err)=>{
        console.log("err in updating  data 2 ",err)
    })
})

router.put("/edit/:id",(req,res)=>{
    console.log("data of comments",req.body)
    db.posttable.update({comments:req.body},
        {where:{
        id:req.params.id
    }})
    .then(()=>{res.send("success")})
    .catch((err)=>{
        console.log("err in updating  data  3",err)
    })
})


module.exports=router;