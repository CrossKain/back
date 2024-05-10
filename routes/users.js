const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createdUser,
} = require( "../controlers/users/userController");


router.get("/users", getAllUsers)
router.get("/users/:user_id", getUserById)
router.post("/users", createdUser)
router.patch("/users/:user_id", updateUser)
router.delete("/users/:user_id", deleteUser)


module.exports = router