require("./db/connection");
const cors = require("cors");
const express = require("express");


const port = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());


app.listen(port, () =>{
    console.log(`server is listening on port ${port}`)
});