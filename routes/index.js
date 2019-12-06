const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send( "HELLO TO MY API" );
});

module.exports = router;
