const adminModel = require("../models/adminModel");
const brycpt = require("bcrypt");
var jwt = require("jsonwebtoken");

//creating a new user
// async function registeruser(req, res) {
//   const { name, age, phone, password} = req.body;
//   const saltRounds = 10;

//   var hashPassword = await brycpt.hash(password, saltRounds);

//   try {
//     const newuser = await adminModel({
//       name,
//       age,
//       phone,
//       password: hashPassword,
      
//     });
//     newuser.save();

//     res.status(201).json({
//       status: 1,
//       message: "user registered successfully",
//       newuser,
//     });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// }

async function registerAdmin(req, res) {
    const { name, age, phone, password } = req.body;
    const saltRounds = 10;
  
    try { 
      const hashPassword = await bcrypt.hash(password, saltRounds);
   
      const newUser = new adminModel({
        name,
        age,
        phone,
        password: hashPassword
        
      });
   
      await newUser.save();
   
      const token = jwt.sign(
        { userId: newUser._id, name: newUser.name ,role:"admin" },  
        secratekey,  
        { expiresIn: '365d' }  
      ); 
      res.status(201).json({
        status: 1,
        message: "User registered successfully",
        token, 
        newUser
      });
    } catch (error) {
      res.status(500).json({
        status: 0,
        message: "Error registering user",
        error: error.message,
      });
    }
  }

//login user

async function loginAdmin(req, res) {
  const { name, password } = req.body;

  try {
    const user = await userModel.findOne({ name });

    if (!user) {
      return res.status(400).json({ message: "no user found with name" });
    }

    const decryptPassword = await brycpt.compare(password, user.password);
     
    console.log( decryptPassword);



    if (decryptPassword) {
      var token = jwt.sign(
        { id: user._id, phone: user.phone },
        "secratekey",
        { expiresIn: "365d" }
      );
      return res
        .status(200)
        .json({ message: " user found succesfully", user, token });
    }
   else{
    return res.status(400).json({ message: "invalid password" });
   }

    console.log(decryptPassword);
  } catch (error) {}
}

module.exports = {
   registerAdmin,
   loginAdmin
};
