const { connection } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    connection.query(`SELECT * from customers`, (error, results, fields) => {
      if (error) {
        res.status(500).send({
          message:
            "error when try to get customers, check your connection to database",
          data: error
        });
      } else {
        res.status(200).send({
          message: `Customers`,
          data: results
        });
      }
    });
  },
  findOne: (req, res) => {
    connection.query(
      "SELECT * from customers where id = ?",
      req.params.id,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get customers, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Customers`,
            data: results
          });
        }
      }
    );
  },
  addOne: (req, res) => {
    connection.query(
      "insert into customers SET ?",
      req.body,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get customers, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Customers`,
            data: results
          });
        }
      }
    );
  },
  updateOne: (req, res) => {
    connection.query(
      "update customers SET ?  WHERE id = ?",
      [req.body, `${req.params.id}`],
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get customers, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Customers`,
            data: results
          });
        }
      }
    );
  },
  deleteOne: (req, res) => {
    connection.query(
      "DELETE FROM customers WHERE id = ?",
      req.params.id,
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message:
              "error when try to get customers, check your connection to database",
            data: error
          });
        } else {
          res.status(200).send({
            message: `Customers`,
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
