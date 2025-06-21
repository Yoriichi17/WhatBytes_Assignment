const Doctor = require('../models/Doctor');

// Create a new doctor
exports.createDoctor = async (req, res) => {
  const { name, specialization, phone } = req.body;

  if (!name || !specialization || !phone) {
    return res.status(400).json({ message: 'Name, specialization, and phone are required' });
  }

  try {
    const doctor = await Doctor.create({ name, specialization, phone });
    res.status(201).json({ message: 'Doctor created successfully', doctor });
  } catch (err) {
    console.error('Create Doctor Error:', err);
    res.status(500).json({ message: 'Error creating doctor', error: err.message });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (err) {
    console.error('Fetch Doctors Error:', err);
    res.status(500).json({ message: 'Error fetching doctors', error: err.message });
  }
};

// Get a doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (err) {
    console.error('Fetch Doctor Error:', err);
    res.status(500).json({ message: 'Error fetching doctor', error: err.message });
  }
};

// Update a doctor's details
exports.updateDoctor = async (req, res) => {
  const { name, specialization, phone } = req.body;

  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.update({ name, specialization, phone });
    res.status(200).json({ message: 'Doctor updated successfully', doctor });
  } catch (err) {
    console.error('Update Doctor Error:', err);
    res.status(500).json({ message: 'Error updating doctor', error: err.message });
  }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.destroy();
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    console.error('Delete Doctor Error:', err);
    res.status(500).json({ message: 'Error deleting doctor', error: err.message });
  }
};
