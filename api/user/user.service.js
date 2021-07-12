import { redisKey, splitArrayInArrays } from '../../utils';
import { User } from './user.model';

export default function userService() {
  /**
   * Returns users ids and score sorted inside redis key
   * @param {Object} redisClient - The client for redis connection
   * @return {Promise} The promise that represents the array of ids and scores, splitted in smaller arrays of size 2
   */

  const getKeyItems = function getKeyItems(redisClient) {
    return new Promise((resolve, reject) => {
      redisClient.on('error', (err) => {
        reject(err);
      });

      redisClient.zrange(redisKey(), 0, -1, 'withscores', (err, result) => {
        if (err) {
          throw new Error(err);
        }
        return resolve(splitArrayInArrays(result, 2));
      });
    });
  };

  /**
   * Returns users from mongo db
   * @param {MongooseModel} UserModel - The user model
   * @return {Array} Array with the users
   */

  const getUsers = async () => {
    const users = await User.find({}).lean();
    if (!users) {
      throw new Error('No users found');
    }
    return users;
  };

  /**
   * Returns an object of users as dictionary in order to reduce time for id mapping
   * with redis key ids
   * @return {Object} Object containing each user object as dictionary
   */

  const getUsersAsDictionary = async () => {
    const users = await getUsers();
    const result = users.reduce(
      (obj, item) => ({ ...obj, [item._id]: item }),
      {}
    );
    return result;
  };
  return { getKeyItems, getUsersAsDictionary, getUsers };
}
