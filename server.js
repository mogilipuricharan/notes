const express=require("express");
const fs=require("fs");
const cors=require("cors");
const { title } = require("process");


const app=express();
const PORT =5000;

app.use(cors());
app.use(express.json());

const FILE ="./note.json";

app.get("/note", (req, res) => {
    fs.readFile(FILE, "utf-8", (err, data) => {
        if (err)
            return res.json({ note: "" });
        res.json(JSON.parse(data));
    
    })
});


app.post("/note", (req, res) => {
    const noteDATA = {
        title: req.body.title,
        content: req.body.content
    };


    fs.writeFile(FILE, JSON.stringify(noteDATA), (err) => {
        if (err)
            return res.status(500).json({ message: "ERROR" });
        res.json({ message: " Note saved successfully " });
    }) 
}
);


app.listen(PORT, () => {
    console.log("server is running ");
});``