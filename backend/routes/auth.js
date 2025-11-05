const express=require('express');
const bcrypt=require('bcryptjs');
const User=require('../models/User.js');
const router=express.Router();
const passport=require('../passport.js');

router.post('/register',async (req,res)=>{
    const {email,password}=req.body;
    const hash=await bcrypt.hash(password,10);
    const user = new User({email,password:hash});

    try{
        await user.save();
        res.status(201).json({message:"User registered."});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) return res.status(404).json({error:"User Not Found"});
    const valid=await bcrypt.compare(password,user.password);
    if(!valid) return res.status(401).json({error:"Incorrect Password"});

    res.json({message: "Logged in.", user});
});

router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login', session: true }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);
module.exports = router;