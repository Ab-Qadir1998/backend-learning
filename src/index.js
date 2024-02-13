// For Third Approach
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
import express from 'express'
import dotenv from 'dotenv'
const app = express();

// For Third Approach
import { DBConnect } from './db/index.js';
dotenv.config({
    path : './env'
})
// For Third Approach



// First Approach
// const DBConnect = async ()=> {
//     try {
//         const instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log(instance.connection.host)
//         app.on("error", (error)=> {
//             console.log("Error connecting with the DB", error)
//         });

//         app.listen(process.env.PORT, ()=> {
//             console.log("App is running on the port ", process.env.PORT)
//         })
//     } catch (error) {
//         console.log('Error Connecting with the DB', error)
//     }
// }
// DBConnect();



// Second Approach
// ;(async ()=>{
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log('Mongo DB is connected with the host ',connectionInstance.connection.host)
//         app.on("error", (error)=> {
//             console.log("Error  while connecting to MongoDB: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=> {
//             console.log("App is running on the port", process.env.PORT)
//         })
//     } catch (error) {
//         console.log('Error connecting DB', error)
//         throw error
//     }
// })();


// Third Approach
DBConnect()
.then(()=> {
    app.listen(process.env.PORT, ()=> {
        console.log('app is running on PORT ', process.env.PORT)
    })
})
.catch((err)=> {
    console.log(err, 'error running the port')
})