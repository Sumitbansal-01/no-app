const { readable, fs, csv } = require("../../config/importModulesConfig")
const eachRowValidation = require("../validations/eachRowValidation")

const uploadFile = async (req, res) => {
    try {
        const csvFile = req.files.csvFile
        const Readable = readable().Readable
        const inputStream = new Readable({
            read() {
                this.push(csvFile.data.toString())
                this.push(null)
            }
        })
        const data = []
        const errorData = []
        inputStream
            .pipe(csv()())
            .on('data', (row) => {
                if (eachRowValidation.validate(row).error) {
                    errorData.push(row)
                } else {
                    data.push(row)
                }
            })
            .on('end', () => {
                fs().writeFileSync(__dirname + "/../../../output/csv.json", JSON.stringify(data))
                if (errorData.length === 0) {
                    return res.send({ error: "No", value: "Uploaded Successful" })
                }
                return res.send({ error: "Partial", value: "Some or all the rows are failed the validation", failedRows: errorData })
            })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ error: "Yes", value: err.message })
    }
}

module.exports = uploadFile