const { User } = require('../../../models');

module.exports = async(req, res) => {

    
    const users = await User.findAll({
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    });

    return res.json({
        status: 'success',
        data: users
    })
}