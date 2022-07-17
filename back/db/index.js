const mongodb = require("mongoose")
const mongo_host = process.env.MONGO_URL || "mongodb://localhost:27017/mern-hotel"

mongodb.connect(`${mongo_host}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected"))
.catch(error => console.log(`Erro: ${error}`))