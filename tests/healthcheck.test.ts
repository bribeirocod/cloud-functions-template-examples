import lambdaTester from 'lambda-tester';
import { expect } from 'chai';
import { healthCheckGET } from '../src/handler';

describe('HealthCheck status [GET]', () => {
  it('success', () => {
    return lambdaTester(healthCheckGET)
      .event({})
      .expectResult(result => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);

        expect(body.status).to.equal('ok');
      });
  });
});
