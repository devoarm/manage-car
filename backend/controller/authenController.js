const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const moment = require("moment");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

const editUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await db("user")
      .where({
        user_id: id,
      })
      .select("email","firstname",'lastname','user_level','role');
    return res.json({ status: 200, msg: user[0] });
  } catch (error) {
    return res.json({ status: 500, msg: error });
  }
};
const delUser = async (req, res) => {
  const { id } = req.params;
  try {
    let del = await db("user").where("user_id", id).del();
    return res.json({ status: 200, msg: del });
  } catch (error) {
    return res.json({ status: 500, msg: error });
  }
};
const users = async (req, res) => {
  try {
    let user = await db.select("*").from("user");
    return res.json({
      status: 200,
      msg: "success",
      user: user,
    });
  } catch (error) {
    return res.json({
      status: 500,
      msg: error,
    });
  }
};
const login = async (req, res) => {
  let body = req.body;
  try {
    var data = await db
      .select("*")
      .from("user")
      .where({ email: req.body.email })
      .limit(1);
    if (data.length > 0) {
      bcrypt.compare(
        body.password,
        data[0].password,
        async function (err, isLogin) {
          var token = jwt.sign({ email: data[0].email }, secret);
          if (isLogin) {
            let accessToken = await db("user")
              .where({ user_id: data[0].user_id })
              .update({ accessToken: token });
            return res.json({
              status: 200,
              msg: "success",
              user: data[0],
              token: token,
            });
          } else {
            return res.json({ status: 301, msg: "noUser" });
          }
        }
      );
    } else {
      return res.json({ status: 301, msg: "noUser" });
    }
  } catch (error) {
    return res.json({ status: 500, message: error });
  }
};
const register = async (req, res) => {
  let body = req.body;
  var data = await db.select("*").from("user").where({ email: req.body.email });
  console.log(data);
  if (data.length < 1) {
    bcrypt.hash(body.password, saltRounds, async function (err, hash) {
      try {
        body.password = hash;
        var sql = await db("user").insert([
          {
            email: body.email,
            password: hash,
            firstname: body.firstname,
            lastname: body.lastname,
            user_level: body.user_level,
            role: body.role,
          },
        ]);
        return res.json({ status: 200, msg: "success" });
      } catch (error) {
        return res.json({ status: 500, msg: error });
      }
    });
  } else {
    return res.json({ status: 200, msg: "hasData" });
  }
};
const logout = async (req, res) => {
  const authHeader = req.headers["authorization"];
  var token = jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ status: 200, msg: "You have been Logged Out", token });
    } else {
      res.send({ msg: "Error" });
    }
  });
};

module.exports = { login, register, users, logout, delUser, editUser };
