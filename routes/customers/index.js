const Router = require("express").Router();

Router.post("/", require("./customerController").addOne);
Router.put("/:id", require("./customerController").updateOne);
Router.delete("/:id", require("./customerController").deleteOne);
Router.get("/:id", require("./customerController").findOne);
Router.get("/", require("./customerController").getAll);

module.exports = Router;