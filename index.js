const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, connection } = require("./config");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("hjhgjhghg");
  
  res.send({ message: "Welcome to my akla mysql api" });
});
app.use("/customers", require('./routes/customers'))
app.use("/products", require('./routes/products'))

connection.connect(function(err) {
  if (err) {
    console.error("error connect: " + err.stack);
    return;
  }
  console.log("connected to database");
});

app.listen(PORT, () => {
  console.log("THIS APP IS LISTEN ON PORT: " + PORT);
});
