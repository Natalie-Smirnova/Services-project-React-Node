const express = require("express");

const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/user-controller");

const router = express.Router();

router.route("/:id?").get(getUserById).post(createUser).put(updateUser).delete(deleteUser);

module.exports = router;