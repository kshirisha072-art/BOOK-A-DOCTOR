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

// Get Logged-in User Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patient: req.user.id,
    })
      .populate("patient", "name email phone")
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