const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/createUser", function (req, res, next) {
  const sql =
    "insert into user_info (user_id, user_name, sex, create_date) values (?,?,?,?)";
  const { user_name, sex } = req.body;
  const create_date = Date.now();
  const user_id = create_date;
  db.connection(
    sql,
    [user_id, user_name, sex, create_date],
    (err, data) => {
      res.json({
        code: 0,
        msg: "提交成功",
      });
    }
  );
});

router.get("/getUserList", function (req, res, next) {
  const sql = "select * from user_info";

  db.connection(sql, [], (err, data) => {
    res.json({
      code: 0,
      msg: "查询成功",
      list: data,
    });
  });
});

module.exports = router;
