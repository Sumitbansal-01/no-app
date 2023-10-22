const chai = require('chai')
const chaiHttp = require('chai-http')
const fs = require('fs')
const app = require('../app')
chai.use(chaiHttp)
const assert = chai.assert

// For trie testing
describe('App Test', function () {


    it('Is app running? ', function (done) {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.value, "App is working properly");
            })
        done()
    })

    it('For successful validation i.e. input2', function (done) {
        const input2Data = fs.readFileSync(__dirname + "/../input/input2.csv")

        chai
            .request(app)
            .post('/uploadCsv')
            .attach('csvFile', input2Data, {
                filename: 'input2.csv',
                contentType: 'text/csv'
            })
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.error, "No")
                assert.strictEqual(res.body.value, "Uploaded Successful")
            })

        done()
    })

    it('For partial successful validation i.e. input1', function (done) {
        const input1Data = fs.readFileSync(__dirname + "/../input/input1.csv")

        chai
            .request(app)
            .post('/uploadCsv')
            .attach('csvFile', input1Data, {
                filename: 'input1.csv',
                contentType: 'text/csv'
            })
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.error, "Partial")
                assert.strictEqual(res.body.value, "Some or all the rows are failed the validation")
            })

        done()
    })

    it('For different type of file i.e. input3', function (done) {
        const input3Data = fs.readFileSync(__dirname + "/../input/input3.pdf")

        chai
            .request(app)
            .post('/uploadCsv')
            .attach('csvFile', input3Data, {
                filename: 'input3.csv',
                contentType: 'application/pdf'
            })
            .end((err, res) => {
                assert.strictEqual(res.status, 400);
                assert.strictEqual(res.body.error, "Yes")
            })

        done()
    })

    after(() => {
        console.log("\nTest Complete")
        process.exit()
    })


});