let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Not Authentificated behavior', () => {
    it('/secure should 401 if not authentificated', (done) => {
        chai.request(app)
            .get('/secure')
            .end((err,res) => {
                res.should.have.status(401);
                done();
            });
    });
});