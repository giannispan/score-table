/**
 * Returns the client object for the redis connection
 * @param {Object} config - The configuration object for redis connection
 * @param {Module} redis - The node.js redis client
 * @return {Promise} Promise that represents the redis client object
 */

export default function connectRedisDb(config, redis) {
  function connect() {
    return redis.createClient(config.redis.uri);
  }

  connect().on('connect', () => {
    console.info('Connected to Redis!');
  });

  connect().on('error', (error) => {
    console.error(`Error in Redis connection: ${error}`);
  });

  return {
    connect
  };
}
