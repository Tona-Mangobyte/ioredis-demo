import redis from './redis-connection';

describe('Simple test', () => {
  let redisConnection = null;
  beforeAll(() => {
    console.log('Before all tests');
    redisConnection = redis;
  });

  afterAll(() => {
    console.log('After all tests');
    redisConnection.disconnect();
  });

  it('set & get', async () => {
    const key = 'foo1';
    const value = 'bar';
    redisConnection.set(key, value);
    const result = await redisConnection.get(key);
    expect(value).toBe(result);
  });
});
