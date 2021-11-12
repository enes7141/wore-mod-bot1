const mongoose = require("mongoose");

const ewing_messages = mongoose.Schema({
  user: String,
  channels: Map,
  timeout: Number
});

module.exports = mongoose.model("ewing_messages", ewing_messages);
