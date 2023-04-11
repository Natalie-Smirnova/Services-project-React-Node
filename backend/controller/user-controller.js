import userService from "../service/user-service";

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json({ data: users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res, id) => {
  try {
    const user = await userService.getUserById(req.query.userId);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    await userService.updateUser(req.query.userId, req.body);
    const user = await userService.getUserById(req.query.userId);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.query.userId);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {getUsers, createUser, getUserById, updateUser, deleteUser};