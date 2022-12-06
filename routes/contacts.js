const router = require("express").Router();
const { modelNames } = require("mongoose");
const {
  addContacts,
  sendOtp,
  sentOtpContacts,
} = require("../controllers/contacts.controllers");

// @route   POST /contacts
router.route("/contacts").post(addContacts);
// @route   POST /contacts/:id
router.route("/contacts/:id").post(sendOtp);
// @route   GET /contacts
router.route("/otplogs").get(sentOtpContacts);
module.exports = router;
