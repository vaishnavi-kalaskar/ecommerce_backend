const categarymodel = require("../models/category");

//creating a new user
async function createcategary(req, res) {

   const isAdmin=req.role;
   if(!isAdmin==="admin"){

    return res.status(401).json({message:"You are not authorized to perform this action"})

   }
   console.log(isAdmin);
  
  const { name } = req.body;

  try {
    const newcategory = categarymodel({
      name,
    });

    await newcategory.save();
    
    res.status(201).json({
      status: 1,
      message: "categary done",
      newcategory,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deletecategary(req, res) {
  const categaryID = req.body.categaryID;

  try {
    const categaryDelete = await categarymodel.findByIdAndDelete(categaryID);

    res.status(201).json({
      status: 1,
      message: "categary delete",
      categaryDelete,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updatecategary(req, res) {
  const categaryID = req.params.categaryID;

  const name = req.body.name;

  try {
    const updatedTask = await categarymodel.findByIdAndUpdate(
      categaryID,
      { name: name },
      { new: true }
    );

    res
      .status(201)
      .json({
        status: 1,
        message: "categary updated successfully",
        updatedTask,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getcategary(req, res) {
  try {
    const task = await categarymodel.findById(req.params.categaryID);
    if (!task) {
      return res.status(404).json({ message: "categary not found" });
    } else {
      res.status(200).json({ message: "categary found", task });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while fetching categary", error: err.message });
  }
}

module.exports = {
  createcategary,
  deletecategary,
  updatecategary,
  getcategary,
};
