import userService from './user.service';
import { getMinutesDiff } from '../../utils';

export default function userController(redisClient) {
  /**
   * Returns the json document with user score and data, sort by greater
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Next middleware function
   * @return {JSON} JSON document that represents the users sorted by greater score,
   * paginated (25 items per page), along with some global values
   */

  const generateUserInfo = async (req, res, next) => {
    const { page } = req.params;
    const limit = 25;
    try {
      const mappedUsers = await userService().getUsersAsDictionary();
      const keyItems = await userService().getKeyItems(redisClient);

      const result = keyItems
        .map((key) => ({ ...mappedUsers[key[0]], score: key[1] }))
        .sort((a, b) => b.score - a.score);
      return res.json({
        total_users: Object.keys(mappedUsers).length,
        remaining_time: getMinutesDiff(new Date()),
        users: result.slice((page - 1) * limit, page * limit)
      });
    } catch (err) {
      return next(err);
    }
  };
  return { generateUserInfo };
}
