const request = require('request');
const expect = require('chai').expect;

const baseUrl = "https://swapi.co/api";

describe('return luke', function() {
	it('returns luke', function(done) {
		request.get({ url: baseUrl + '/people/1/'}, function(err, res, body) {
			const bodyObj = JSON.parse(body);
			expect(bodyObj.name).to.equal("Luke Skywalker");
			expect(bodyObj.hair_color).to.equal("blond");
			expect(res.statusCode).to.equal(200);
			console.log(body);
			done();
		});
	});
});
