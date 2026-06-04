const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {

    return res.json({
      token: "fake-jwt-token"
    });

  }

  return res.status(401).json({
    error: "Unauthorized"
  });

});

module.exports = router;