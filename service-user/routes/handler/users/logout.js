const {
    User,
    RefreshToken
  } = require('../../../models');

module.exports = async (req, res) => {
    const userId = req.body.user_id;
    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    await RefreshToken.destroy({
        where: { user_id: userId }
    });

    return res.json({
        status: 'success',
        message: 'refresh token deleted'
    });
}