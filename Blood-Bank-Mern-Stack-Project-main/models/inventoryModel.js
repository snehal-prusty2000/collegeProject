const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type require"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      require: [true, "blood quanity is require"],
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    organisation: {//organisation required because where from blood come and blood go
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",//this is collection name of users
      required: [true, "organisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";//It means that the "hospital" field is required (required: true) only when the inventoryType field is equal to "out". If the inventoryType is not "out", then the "hospital" field is not required.
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,//In MongoDB, each document in a collection has a unique identifier called an ObjectId. It's a 12-byte identifier typically represented as a 24-character hexadecimal string.  This is a common pattern in MongoDB for creating relationships between documents in different collections.
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);//new colllection add in bloodbank inventories
