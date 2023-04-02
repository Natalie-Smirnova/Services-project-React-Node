import UserModel from "../data/user-model";

const getUsers = async () => {
  return await UserModel.find();
};

const createUser = async (user) => {
  return await UserModel.create(user);
};

const getUserById = async (id) => {
  return await UserModel.findById(id);
};

const updateUser = async (id, user) => {
  return await UserModel.findByIdAndUpdate(id, user);
};

const deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};

export default {getUsers, createUser, getUserById, updateUser, deleteUser};