import { models } from '../../models/init-models.js';
import { CustomError, wrapAsyncError } from '../../library/index.js';

const isDeleteValid = wrapAsyncError(async (req, res, next) => {
  const comment_id = req.params.id;
  const comment = await models.Comment.findById(comment_id);

  if (req.user_id != comment.user_id)
    throw new CustomError(
      'Bad Request',
      'π₯ μμ μ΄ μ΄ λκΈλ§ μ­μ ν  μ μμ΅λλ€.',
      403,
    );

  next();
});
export default isDeleteValid;
