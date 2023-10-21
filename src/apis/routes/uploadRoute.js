const { express } = require("../../config/importModulesConfig")
const router = express().Router()
const uploadValidation = require("../validations/uploadValidation")
const uploadController = require("../controllers/uploadController")
const joiValidator = require("../../utils/joiValidator")

router.post("/uploadCsv", joiValidator(uploadValidation, "files"), uploadController)

module.exports = router
