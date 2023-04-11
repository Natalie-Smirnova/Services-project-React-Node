import cardService from "../service/card-service";

const getCards = async (req, res) => {
  try {
    const cards = await cardService.getCards();
    res.json({ data: cards, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await cardService.getCardById(req.query.id);
    res.json({ data: card, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCard = async (req, res) => {
  try {
    const card = await cardService.createCard(req.body);
    res.json({ data: card, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCard = async (req, res) => {
  try {
    await cardService.updateCard(req.query.id, req.body);
    const cards = await cardService.getCards();
    res.json({ data: cards, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    await cardService.deleteCard(req.params.id);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {getCards, getCardById, createCard, updateCard, deleteCard};