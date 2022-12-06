const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    firstName: {
      type: String,
      maxlength: 50,
    },
    lastName: {
      type: String,
      maxlength: 50,
    },
    phone: {
      type: String,
      match: [/^[0-9]+$/, "Please enter a valid phone number"],
    },
    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
