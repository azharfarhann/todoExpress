// MVC Folder structure

// M ==> Models (DB Schema)
// V ==> view (Frontend Code || React || HTML CSS)
// C ==> controllers( Backend API'S)
// U ==> utils (we write functions which we use many times)
// C ==> config or .env 

// what is express router?





// 6 common API'S
//  STUDENTS        METHOD

//1. get all         (GET)
//2. GET by id       (GET)
//3. ADD             (POST)
//4. Update by id    (PUT)
//5. Delete by id    (DELETE)
//6. Delete all      (DELETE)    


// lets create All 6 API'S of Students
import express from "express";
import dotenv from "dotenv"
dotenv.config();

// Controller APIS
import userRouter from "./controllers/users/index.js"



// Admin
import adminRouter from "./controllers/admin/index.js"






const app = express()
const PORT = process.env.PORT ||  5000;
app.use(express.json()); 

//1. Get all
 
// app.get("/getall",(req,res) => {
//     try {
//         app.get("/",(req,res) => {
//     try {
//         res.status(200).json({page: "Get All"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error});
//     }
// })


// // 2. Get by id
// app.get("/getbyid",(req,res) => {
//     try {
//         res.status(200).json({page: "Get by id"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error});
//     }
// })

// //3. ADD (POST)

// app.post("/register",(req,res) => {
//     try {
//         res.status(200).json({msg: "User added successfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error});
//     }
// })

// //4. Update by id (PUT) /// here id means dynamic so use /:id

// app.put("/update/:id",(req,res) => {
//     try {
//         res.status(200).json({msg: "User updated successfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error});
//     }
// })

// //5. Delete By Id (DELETE)/// here id means dynamic so use /:id

// app.delete("/deletebyid/:id",(req,res) => {
//     try {
//         res.status(200).json({msg:"Deleted user by id sucessfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error});
//     }
// })

// //6. Delete All (DELETE)

// app.delete("/deleteall",(req,res) => {
//     try {
//         res.status(200).json({msg:"All users Deleted sucessfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error});
//     }
// })


// prefix fixed path 


app.use("/users",userRouter);


// /users
//       /getall
//       /getbyid:id
//       /add
//       /update
app.use("/admins",adminRouter)


app.use((req,res) => {
    res.status(404).send(`bhai method or spelling check kar`)
})
app.listen(PORT,() => {
    console.log(`server is up and running at ${PORT}`);
})