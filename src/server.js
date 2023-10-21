// Importing Modules
const { express, fileUploader } = require("./config/importModulesConfig")

// Creating App
const app = express()()

// Using middlewares
app.use(express().json())
app.use(fileUploader()())

app.use(require("./apis/middlewares/consoller"))

app.get("/", (req, res) => res.send({ error: "No", value: "App is working properly" }))

app.use(require("./apis/routes/uploadRoute"))

// For catching route not found
app.use((req, res) => res.status(404).send({ error: "Yes", value: "Route not found" }))

// exporting app
module.exports = app