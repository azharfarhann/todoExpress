import express from "express";
const router = express.Router();

//1. GET ALL users

router.get("/getall",(req,res) =>{
    try {
        res.status(200).json({msg: "Get all users"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})
//2. Get by id
router.get("/getbyid/:id",(req,res) => {
    try {
        res.status(200).json({msg: "Get by id"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})

//3. ADD (POST)

router.post("/register",(req,res) => {
    try {
        res.status(200).json({msg: "User added successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})

//4. Update by id (PUT) /// here id means dynamic so use /:id

router.put("/update/:id",(req,res) => {
    try {
        res.status(200).json({msg: "User updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})

//5. Delete By Id (DELETE)/// here id means dynamic so use /:id

router.delete("/deletebyid/:id",(req,res) => {
    try {
        res.status(200).json({msg:"Deleted user by id sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})

//6. Delete All (DELETE)

router.delete("/deleteall",(req,res) => {
    try {
        res.status(200).json({msg:"All users Deleted sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})

export default router;