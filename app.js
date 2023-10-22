const { dotenv } = require("./src/config/importModulesConfig")
dotenv()
const app = require("./src/server")
const port = process.env.PORT
if (!port) {
    throw new Error("port is not loaded from .env file")
}

app.listen(port, async () => {
    console.log("\nApp is Listening on port", port)
})

module.exports = app