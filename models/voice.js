const mongoose = require("mongoose");

const ewing_voiceStat = mongoose.Schema({
  user: String,
  channels: Map,
  state: String,
  start: Number
});

module.exports = mongoose.model("ewing_voiceStat", ewing_voiceStat);
