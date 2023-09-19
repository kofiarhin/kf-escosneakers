const { Router } = require("express");
const data = require("../data/data");

const router = Router();

router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;
