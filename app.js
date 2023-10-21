const {dotenv} = require("./src/config/importModulesConfig")
dotenv()
const app = require("./src/server")
const port=process.env.PORT

app.listen(port, async ()=>{
    console.log("\nApp is Listening on port",port)
})