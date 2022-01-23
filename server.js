const express = require ("express")
const app = express()
const path = require ("path");
const fs = require ("fs");
const { response } = require("express");
const { Server, request } = require("http");
const database = require("mime-db");

const port = process.env.PORT || 3001

// Setting up the express Server
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Get notes from notes.html file
app.get("/notes", (req,res)=> {
    response.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("retrieving notes file");
})


// Getting index file
app.get("/notes", (req,res)=> {(path.join(__dirname, "public", "index.html"));
console.log("retrieving index file");

})

// Getting existing notes from database
app.get("api/notes", (req,res)=> {
    fs.readFile(path.join(dirname, "db","db.json"),"utf8", (err, jsonString) => {
        if (err){
            console.log ("Cannot read file:", err)
        }

        console.log ('File data:', jsonString);
        var notes = JSON.parse(jsonString);
    })


})

// Use the post method to collect a new note and save it to the html page body
app.post("/api/notes", (req,res) => {
    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err,jsonString)=> {
        if (err){ console.log ("Could not read file:", err)
        return
        }

        console.log('File data:', jsonString);

        const notes = JSON.parse(jsonString);


        // object for notes
        const newNote = {
            title: request.body.title,
            text: request.body.text,

            id: Math.random().toString(36).substring(2,9)
        }


    })
})


// Use the delete method of remove exisitng notes
// app.delete()



app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});