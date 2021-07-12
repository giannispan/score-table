import express from 'express';
import mongoose from 'mongoose';
import redis from 'redis';
import config from './config/config';
import connectMongoDb from './config/db/connectMongo';
import connectRedisDb from './config/db/connectRedis';
import expressConfig from './config/server/express';
import errorHandlingMiddleware from './middlewares/errorHandling.middleware';
import routes from './routes';

const app = express();

const server = require('http').Server(app);

// express headers setting and logging middleware
expressConfig(app);

server.listen(config.port, config.ip, () => {
  console.log(
    'Express server listening on %d, in %s mode',
    config.port,
    app.get('env')
  );
});

// establish connections to mongo and redis
connectMongoDb(mongoose, config).connect();
const redisClient = connectRedisDb(config, redis).connect();

// use routes
routes(app, express, redisClient);

// error handling middleware
app.use(errorHandlingMiddleware);

export { app };
