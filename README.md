## Connection With The MongoDB Database

In the practice code, I have learned two approaches to connect with the **mongoDB database**.

Due to asynchronous operation it's important to use Promise or try catch while making a successfull connection with the database while handeling the errors as well.

#### 1- In index.js file(Root File) {Not Recommended}

* Using IIFE
  
  * ```javascript
    (async ()=>{
     try {
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
         console.log('Mongo DB is connected with the host ',connectionInstance.connection.host)
         app.on("error", (error)=> {
             console.log("Error  while connecting to MongoDB: ", error);
             throw error
         })
         app.listen(process.env.PORT, ()=> {
             console.log("App is running on the port", process.env.PORT)
         })
     } catch (error) {
         console.log('Error connecting DB', error)
         throw error
     }
     })();
    
* Using a Function

  * ```javascript
    const DBConnect = async ()=> {
    try {
        const instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(instance.connection.host)
        app.on("error", (error)=> {
            console.log("Error connecting with the DB", error)
        });

        app.listen(process.env.PORT, ()=> {
            console.log("App is running on the port ", process.env.PORT)
        })
    } catch (error) {
        console.log('Error Connecting with the DB', error)
    }
    }
    DBConnect();

### 2- In index.js file(Inside DB folder) {Marked As Good Practice}.

**Note**
As per my practice I found it imortant to use the dotenv package, because it provides access of env variables throughtout the application.

Make a Directory inside src with named DB(common practice). This file will be responsible for only connecting you with the database, meanwhile keeping your codebase more structured.

 **DB>index.js**
* ```javascript
      import mongoose from "mongoose";
      import { DB_NAME } from "../constants.js";
      
      export const DBConnect = async () => {
        try {
          const connections = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
          );
          console.log(connections.connection.host);
        } catch (error) {
          console.log("DB connection Error", error);
        }
      };

**index.js (Root File)**
* ```javascript
    import express from 'express'
    import dotenv from 'dotenv'
    const app = express();
    
    import { DBConnect } from './db/index.js';
    dotenv.config({
        path : './env'
    });
  
    DBConnect()
    .then(()=> {
        app.listen(process.env.PORT, ()=> {
            console.log('app is running on PORT ', process.env.PORT)
        })
    })
    .catch((err)=> {
        console.log(err, 'error running the port')
    })
