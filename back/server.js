const express = require("express")
const cors = require("cors")
const {readdirSync} = require("fs")
const morgan = require("morgan")

const app = express()

require("dotenv").config()
require("./db")

app.use(morgan("dev"))

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))

app.use(cors());

readdirSync("./routes").map(r => app.use("/api",require(`./routes/${r}`))) //router middleware
//app.use("api/", router)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server running on host http://localhost:${port}`))
//process é a const principal/raiz do node, como o window é do navegador