const { joi } = require("../../config/importModulesConfig")

const validation = joi().object({
    csvFile: joi().object({
        mimetype: "text/csv"
    }).unknown(true).required()
}).required()

module.exports = validation
