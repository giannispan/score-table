import supertest from 'supertest';
import { app } from '../../app';

describe('GET /', () => {
  it(`should not find 'api/leaderboard/test' endpoint`, async () => {
    await supertest(app).get('/api/leaderboard/test').expect(404);
  });

  it(`should find 'api/leaderboard/1' sucessfully`, async () => {
    await supertest(app)
      .get('/api/leaderboard/1')
      .set('Accept', 'application/json')
      .expect(200);
  });
});
