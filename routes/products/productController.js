const { connection } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    connection.query(`SELECT * from products`, (error, results, fields) => {
      if (error) {
        res.status(500).send({
          message:
            "error when try to get products, check your connection to database",
          data: error
        });
      } else {
        res.status(200).send({
          message: `Products`,
          data: results
        });
      }
    });
  },
  findOne: (req, res) => {
    connection.query(
      "SELECT * from products where products_id = ?",
      req.params.id,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get products, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Products`,
            data: results
          });
        }
      }
    );
  },
  addOne: (req, res) => {
    connection.query(
      "insert into products SET ?",
      req.body,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get products, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Products`,
            data: results
          });
        }
      }
    );
  },
  updateOne: (req, res) => {
    connection.query(
      "update products SET ?  WHERE products_id = ?",
      [req.body, `${req.params.id}`],
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get products, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Products`,
            data: results
          });
        }
      }
    );
  },
  deleteOne: (req, res) => {
    connection.query(
      "DELETE FROM products WHERE products_id = ?",
      req.params.id,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get products, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Products`,
            data: results
          });
        }
      }
    );
  },
  joinProductsCustomer: (req, res) => {
    connection.query(
      "SELECT * FROM products INNER JOIN customers on products.customer_id = customers.id",
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get products, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Products`,
            data: results
          });
        }
      }
    );
  }
};
