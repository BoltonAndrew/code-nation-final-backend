require("./db/connection");
const cors = require("cors");
const {userRouter} = require("./routes/User");
const {movieRouter} = require("./routes/Movie");
const express = require("express");


const port = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter)
app.use(movieRouter)



app.get("/health", (req, res) => {
    res.status(200).send({ message: "API is working" });
  });

app.listen(port, () =>{
    console.log(`server is listening on port ${port}`)
});