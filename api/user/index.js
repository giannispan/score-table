import userController from './user.controller';

export default function userRouter(express, redisClient) {
  const router = express.Router();
  router
    .route('/:page(\\d+)') // validate page param (accepts only number)
    .get(userController(redisClient).generateUserInfo);

  return router;
}
