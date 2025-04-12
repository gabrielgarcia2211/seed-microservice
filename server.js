const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/routes/productRoutes");
const logger = require("./src/utils/logger");

const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/", productRoutes);

app.listen(port, () => {
  logger.info(`Servidor corriendo en http://localhost:${port}`);
});