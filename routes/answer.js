const express = require("express");
const router = express.Router();
const isAuthorized = require('../middlewares/isAuthorized');
const Answer = require('../models/answer');
router.post('/submit', (req,res)=>{
    const body = req.body;
    console.log(req.body)
    try {
         const newAnswer = new Answer({
              ...req.body
         })
          newAnswer.save()
         console.log(newAnswer)

         res.json({ newAnswer })
    } catch (err) {
         res.json({
              err
         })
    }
})
router.get('/getall',(res,req)=>{
    const form =  Answer.find()
    if (!form) return res.json("NO result")

    res.json(form)
})
module.exports=router




   
