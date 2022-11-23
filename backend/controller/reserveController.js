const db = require("../config/db");
require("dotenv").config();
const moment = require("moment");

const AddReserve = async (req, res) => {
  try {
    await db("reserve").insert({
      car_id: req.body.car_id,
      user_id: req.body.user_id,
      reserve_objective: req.body.reserve_objective,
      reserve_address_code_full: req.body.reserve_address_code_full,
      reserve_length: req.body.reserve_length,
      reserve_budget_type: req.body.reserve_budget_type,
      reserve_personnel_amount: req.body.reserve_personnel_amount,
      reserve_student_amount: req.body.reserve_student_amount,
      reserve_start_date_time: moment(req.body.reserve_start_date_time).format(
        "YYYY-MM-DD h:mm:ss"
      ),
      reserve_end_date_time: moment(req.body.reserve_end_date_time).format(
        "YYYY-MM-DD h:mm:ss"
      ),
    });
    return res.json({ status: 200, msg: "success" });
  } catch (error) {
    return res.json({ status: 500, msg: error });
  }
};
const GetReserve = async (req, res) => {
  try {
    let data = await db("reserve as r")
      .leftJoin("chauffeur as c", "r.chauffeur_id", "c.chauffeur_id")
      .leftJoin("car", "r.car_id", "car.car_id")
      .select(
        "r.*",
        "c.chauffeur_fname",
        "c.chauffeur_lname",
        "car.car_brand",
        "car.car_model",
        "car.car_license",
        "car.car_color_badge"
      );
    return res.json({ status: 200, msg: "success", result: data });
  } catch (error) {
    return res.json({ status: 500, msg: error.message });
  }
};
const FindOneReserve = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await db("reserve as r")
      .leftJoin("chauffeur as c", "r.chauffeur_id", "c.chauffeur_id")
      .leftJoin("car", "r.car_id", "car.car_id")      
      .select(
        "r.*",
        "c.chauffeur_fname",
        "c.chauffeur_lname",
        "car.car_brand",
        "car.car_model",
        "car.car_license"
      )
      .where({ reserve_service_id: id })
      .first();
    return res.json({ status: 200, msg: "success", result: data });
  } catch (error) {
    return res.json({ status: 500, msg: error });
  }
};
// const UpdateAgency = async (req, res) => {
//   try {
//     let data = await db("agency")
//       .update({ agency_name: req.body.agency_name })
//       .where({ agency_id: req.body.agency_id });
//     return res.json({ status: 200, msg: "success", result: data });
//   } catch (error) {
//     return res.json({ status: 500, msg: error });
//   }
// };
// const DeleteAgency = async (req, res) => {
//   let {id} = req.params
//   try {
//     let data = await db("agency")
//       .where({ agency_id: id })
//       .del();
//     return res.json({ status: 200, msg: "success", result: data });
//   } catch (error) {
//     return res.json({ status: 500, msg: error });
//   }
// };

module.exports = {
  AddReserve,
  GetReserve,
  FindOneReserve,
  //   UpdateAgency,
  //   DeleteAgency,
};
