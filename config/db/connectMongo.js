/**
 * Returns the connection for mongodb
 * @param {Library} mongoose  - The mapping between our application and mongo db
 * @param {Object} config - The configuration object for mongo connection
 * @return The connection with the mongo db
 */

export default function connectMongoDb(mongoose, config) {
  function connect() {
    mongoose.connect(config.mongo.uri, config.mongo.options.db);
  }

  mongoose.connection.on('connected', () => {
    console.info('Connected to MongoDB!');
  });

  mongoose.connection.on('error', (error) => {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
  });

  return {
    connect
  };
}
