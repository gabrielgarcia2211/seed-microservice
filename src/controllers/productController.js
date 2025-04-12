const productRepository = require("../repositories/productRepository");
const logger = require("../utils/logger");

const getProducts = async (req, res) => {
  try {
    const products = await productRepository.findActive();
    res.status(200).json(products);
  } catch (error) {
    logger.error("Error al obtener los productos:", error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

module.exports = {
  getProducts,
};