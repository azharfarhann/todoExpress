import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express()
const PORT = process.env.PORT ||  5000;
app.use(express.json()); 

app.get("/",(req,res) => {
    try {
        res.status(200).json({page: "Home Page"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})
app.post("/post",(req,res) => {
    try {
        let age = req.body.age;
        res.status(200).json({age});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error});
    }
})
app.use((req,res) => {
    res.status(404).send(`route or server is wrong`)
})
app.listen(PORT,() => {
    console.log(`server is up and running at ${PORT}`);
})