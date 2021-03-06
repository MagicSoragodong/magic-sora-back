import { models } from '../../models/init-models.js';
import { wrapAsyncError, CustomError } from '../../library/index.js';

const isLikesValid = wrapAsyncError(async (req, res, next) => {
  const comment_id = req.body.comment_id;
  const comment = await models.Comment.findById(comment_id);
  if (req.user_id == comment.user_id) {
    throw new CustomError(
      'Bad Request',
      'π₯ μμ μ΄ μ΄ λκΈμ μ’μμλ₯Ό λλ₯Ό μ μμ΅λλ€',
      403,
    );
  }

  next();
});

export default isLikesValid;
