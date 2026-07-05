const Appointment = require("../models/Appointment");

// Create Appointment
const createAppointment = async (req, res) => {
  try {

    const appointment = await Appointment.create({
      patient: req.user.id,
      doctor: req.body.doctorId,
      appointmentDate: req.body.appointmentDate,
      reason: req.body.reason,
    });

    res.status(201).json({
      success: true,
      appointment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient")
      .populate("doctor");

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};