import CardModel from "../data/user-model";

const getCards = async () => {
  return await CardModel.find();
};

const getCardById = async (id) => {
  return await CardModel.findById(id);
};

const createCard = async (card) => {
  return await CardModel.create(card);
};

const updateCard = async (id, card) => {
  return await CardModel.findByIdAndUpdate(id, card);
};

const deleteCard = async (id) => {
  return await CardModel.findByIdAndDelete(id);
};

export default {getCards, getCardById, createCard, updateCard, deleteCard};