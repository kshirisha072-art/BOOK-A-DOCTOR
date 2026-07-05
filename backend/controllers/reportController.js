const Report = require("../models/Report");

// Create Report
const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);

    res.status(201).json({
      success: true,
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate("patient")
      .populate("doctor")
      .populate("appointment");

    res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReport,
  getReports,
};