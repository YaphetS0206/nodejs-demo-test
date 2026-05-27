const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

  res.status(200).json({
    status: "ok",
    environment: process.env.APP_ENV || "unknown"
  });

});

module.exports = router;