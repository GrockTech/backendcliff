// import mongoose from "mongoose";


// const ShipmentSchema = new mongoose.Schema({
//   trackingId: {
//     type: String,
//     required: true, // matches your Tracking ID input
//     unique: true,
//   },
//   title: {
//     type: String,
//     required: true, // example: item name or shipment title
//   },
//   price: {
//     type: Number,
//     required: true, // from form
//   },
//   quantity: {
//     type: Number,
//     required: true, // from form
//   },
//   stock: {
//     type: Number,
//     default: 0, // optional field
//   },
//   description: {
//     type: String, // "desc" in your old schema
//   },
//   category: {
//     type: String,
//   },
//   imageUrl: {
//     type: String, // matches file/image upload
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model("Shipment", ShipmentSchema);

import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    required: true,
    unique: true,
  },
  senderName: {
    type: String,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  currentLocation: {
    type: String,
  },
  shipmentDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
  },
  weight: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["Pending", "In Transit", "Delivered", "Delayed"],
    default: "Pending",
  },
  remarks: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model("Shipment", ShipmentSchema);
