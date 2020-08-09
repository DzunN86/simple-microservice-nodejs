const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
  const schema ={
    name: 'string|empty:false',
    email: 'email|empty:false',
    password: 'string|min:6',
    profession: 'string|optional',
    avatar: 'string|optional'
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const id = req.params.id;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  const email = req.body.email;
  if (email) {
    const checkEmail = await User.findOne({
      where: { email }
    });

    if (checkEmail && email !== user.email) {
      return res.status(409).json({
        status: 'error',
        message: 'email already exist'
      })
    }
  }

  const password = await bcrypt.hash(req.body.password, 10);
  const {
    name, profession, avatar
  } = req.body;

  await user.update({
    email,
    password,
    name,
    profession,
    avatar
  });

  return res.json({
    status: 'success',
    data: {
      id: user.id,
      name,
      email,
      profession,
      avatar
    }
  });
}