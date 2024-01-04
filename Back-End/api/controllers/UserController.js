"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM user";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM user WHERE email = ?";
    db.query(sql, [req.params.userId], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let userId = req.params.userId;
    let sql = "UPDATE user SET ? WHERE email = ?";
    db.query(sql, [data, userId], (err, response) => {
      if (err) throw err;
      res.json({message: "Update success!"});
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO user SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM user WHERE id = ?";
    db.query(sql, [req.params.userId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
let getUsers = async (req, res) => {
  //http
  // 404 501
  // json/xml => object
  let { Name, Email, Phone, password } = req.body;

  if (!firstName || !lastName || !email || !address) {
      return res.status(200).json({
          message: 'missing required params'
      })
  }
  const [rows, fields] = await pool.execute('SELECT * FROM users WHERE email like %?%', email);

  return res.status(200).json({
      message: 'ok',
      data: rows
  })
}