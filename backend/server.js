process.env.UV_THREADPOOL_SIZE = 16; 

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN, // Your frontend’s actual URL and port
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send('API is running...');
});

const authRoutes=require('./routes/auth.js');
app.use('/api/auth',authRoutes);

const session = require('express-session');
const passport = require('./passport');

app.use(session({ secret: 'dcoder-secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})