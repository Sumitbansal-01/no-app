const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp)
const assert = chai.assert
const dotenv = require('dotenv')
dotenv.config()
const port=process.env.PORT
if(!port){
    throw new Error("port is not present")
}

// For trie testing
describe('App Test', function () {


    it('App is running properly', function (done) {
        chai
            .request(`http://localhost:${port}`)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.value, "App is working properly");
                done();
            });
    })

});