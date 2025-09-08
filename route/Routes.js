

import express from "express";
import {
  createShipment,
  getShipments,
  getShipment,
  deleteShipment,
  updateShipmentStatus,
  getShipmentByTrackingId,
} from "../controller/Shipment.js";

const router = express.Router();

router.post("/shipments", createShipment);            // Create new shipment
router.get("/shipments", getShipments);               // Get all shipments
router.get("/shipments/:id", getShipment);            // Get single shipment
router.delete("/shipments/:id", deleteShipment);      // Delete shipment
router.put("/shipments/:id/status", updateShipmentStatus); // Update only status
router.get("/shipments/tracking/:trackingId", getShipmentByTrackingId); //tracking route


export default router;
