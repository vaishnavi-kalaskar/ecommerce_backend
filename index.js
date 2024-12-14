const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.use(express.json());
console.log("index file is running");
const PORT = 1800;
 
//import route 

const userModule = require('./routes/userRoute');
const adminModel=require('./routes/AdminRoute');
const categarymodel=require('./routes/categaryRoutes');


app.use("/api/users",userModule);
app.use("/api/admin",adminModel);
app.use("/api/categary",categarymodel);
 

 

//concept to monodb
mongoose.connect("mongodb+srv://Vaishnavi:qwertyuiop@cluster0.ak1le.mongodb.net/")
  .then(() =>{
  })
    .catch((error)=>{
        console.error("Error connecting to MongoDB:",error)
    });
  

console.log("MongoDB connected");

app.listen(PORT, () => {
    console.log(`Server started at port http://localhost:${PORT}`);
  });
 