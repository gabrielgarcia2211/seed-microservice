const db = require("../config/database");

const findActive = () => {
  const query = `
    SELECT 
      products.nombre, 
      CONCAT('$', FORMAT(products.precio, 2)) AS precio, 
      products.descripcion, 
      CASE 
        WHEN products.activo = 1 THEN 'Activo' 
        ELSE 'Inactivo' 
      END AS estado
    FROM products
    WHERE products.activo = 1;
  `;

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