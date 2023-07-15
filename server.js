const express = require("express");
const cors = require("cors");
 require("dotenv").config()
require("./config/databaseitinerary")
const Router = require("./routes/routesitinerary")

const app = express();


const PORT = process.env.PORT || 7000;

app.use(cors())
app.set("port", PORT);

app.use(express.json())
app.use("/api", Router)


app.listen(PORT,()=>{
    console.log('SERVIDOR CORRIENDO:'+ app.get("port"))
})