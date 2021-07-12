import userRouter from './api/user';

export default function routes(app, express, redisClient) {
  app.use('/api/leaderboard/', userRouter(express, redisClient));
}
