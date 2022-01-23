const express = require ("express")
const app = express()
const path = require ("path");
const fs = require ("fs");

const port = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get()


app.post()

app.delete()




app.listen(port, () => {
    console.log(`Server is listening on Port ${PORT}`);
});