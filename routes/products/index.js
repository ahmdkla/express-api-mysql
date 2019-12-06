const Router = require("express").Router();

Router.get("/", require("./productController").getAll);
Router.post("/", require("./productController").addOne);
Router.put("/:id", require("./productController").updateOne);
Router.delete("/:id", require("./productController").deleteOne);
Router.get("/:id", require("./productController").findOne);
Router.get("/joinTable", require("./productController").joinProductsCustomer);

module.exports = Router;