const appTest = require('../server/server.ts');
const supertest = require('supertest');
const request = supertest(appTest);

describe('Server tests', () => {
  it('Gets a string from /test endpoint', async () => {
    const response = await request
    .get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Job\'s Done!');
  })
});