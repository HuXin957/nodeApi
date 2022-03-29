const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/leter", function (req, res, next) {
  const sql = "delete * from order_taking where id=?";
  const area = 5;
  db.connection(sql, [area], (err, data) => {
    res.json({
      code: 0,
      msg: "提交成功",
    });
  });
});

module.exports = router;
