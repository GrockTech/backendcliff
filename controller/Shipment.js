

import Shipment from "../model/ShipmentSchema.js";

// Create a new shipment
export const createShipment = async (req, res) => {
  try {
    const newShipment = new Shipment(req.body);
    const savedShipment = await newShipment.save();
    res.status(201).json(savedShipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all shipments (with optional search by trackingId)
export const getShipments = async (req, res) => {
  const search = req.query.search || "";
  try {
    const shipments = await Shipment.find({
      trackingId: { $regex: search, $options: "i" },
    });
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single shipment by ID
export const getShipment = async (req, res) => {
  const { id } = req.params;
  try {
    const shipment = await Shipment.findById(id);
    if (!shipment) return res.status(404).json({ message: "Shipment not found" });
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete shipment
export const deleteShipment = async (req, res) => {
  const { id } = req.params;
  try {
    const shipment = await Shipment.findByIdAndDelete(id);
    if (!shipment) return res.status(404).json({ message: "Shipment not found" });
    res.status(200).json({ message: "Shipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update only shipment status
export const updateShipmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const shipment = await Shipment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!shipment) return res.status(404).json({ message: "Shipment not found" });

    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// In your controller
export const getShipmentByTrackingId = async (req, res) => {
  const { trackingId } = req.params;
  try {
    const shipment = await Shipment.findOne({ trackingId });
    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
