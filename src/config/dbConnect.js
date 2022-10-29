import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Cezarine:mlTTmWFvtDTLrcYr@cluster0.nxcc7cc.mongodb.net/dbalura-node");

let db = mongoose.connection;

export default db;