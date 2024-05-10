const User = require("../../models/user/user");

const getAllUsers = (req, res) => {
  return User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

const getUserById = (req, res) => {
  const { user_id } = req.params;
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        res.status(404).send("Пользователь не найден");
      } else {
        res.status(200).send(user);
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

const createdUser = (req, res) => {
  const { body } = req;
  return User.create({ ...body })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const updateUser = (req, res) => {
  const { user_id } = req.params;
  const { body } = req;
  return User.findByIdAndUpdate(user_id, { ...body })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const deleteUser = (req, res) => {
  const { user_id } = req.params;
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      if (!user) {
        res.status(404).send("Пользователь не найден");
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createdUser,
  updateUser,
  deleteUser,
};
