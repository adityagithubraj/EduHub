// //import express from 'express';
// const express  = require("express")
// //const cors = require("cors")
// //import cors from 'cors'
// // import userRoutes from './routes/userRoutes.js';
// // import chatRoutes from './routes/chatRoutes.js';
// const connection = require("./config/db")

// const app = express();

// // Middleware
// // app.use(json({ extended: false }));
// //app.use(cors());


// // Connect to Database
// connection();

// // Routes
// // app.use('/api/v1/user', userRoutes);
// // app.use('/api/v1/', chatRoutes);


// app.get('/', (req, res) => res.send('EdueHub LMS ...API Running'));

// const PORT = process.env.PORT || 5000;


// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





//........................new///////////////////////
const express =require("express");
const cors = require("cors");
//const cookieParser = require("cookie-parser");

const connection = require("./config/db")
// const{userRouter} = require("./routers/auth")
// const{postRouter} = require("./routers/post.routes")





const app = express();
//app.use(cookieParser())
//app.use(express.json());
app.use(cors());

require("dotenv").config();

const PORT =process.env.PORT || 2000;

app.get("/",(req,res)=>{
res.json("hello")
})

//app.use(userRouter)
//app.use(postRouter )



app.listen(PORT,()=>{
    try {
        connection
        console.log("conected to DB");
    } catch (error) {
        console.log("error on DB");
    }
    console.log(`serveris runig on port  ${PORT}`)
})

