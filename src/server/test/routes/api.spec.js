const config = require('config');
const expect = require('chai').expect;
const request = require('superagent');

describe('routes/api', () => {

  describe.only('Retrieving test data from API', () => {
    it('should return a string with the text "The API is functioning"', (done) => {
      request
        .get(config.endpoints.web + '/api/testGet')
        .end((err, res) => {
          expect(res.body.text).to.be.a('string').and.equal('API is functioning');
          done();
        });
     });
  });

});
