const db = require("../config/database");

const findActive = () => {
  const query = "SELECT * FROM products WHERE activo = 1";

  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  findActive,
};