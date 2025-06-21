const Patient = require('../models/Patient');

// Create a new patient
exports.createPatient = async (req, res) => {
  const { name, age, gender } = req.body;

  if (!name || !age || !gender) {
    return res.status(400).json({ message: 'Name, age, and gender are required' });
  }

  try {
    const patient = await Patient.create({
      name,
      age,
      gender,
      userId: req.user.id
    });
    res.status(201).json({ message: 'Patient created successfully', patient });
  } catch (err) {
    console.error('Create Patient Error:', err);
    res.status(500).json({ message: 'Error creating patient', error: err.message });
  }
};

// Get all patients of the logged-in user
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { userId: req.user.id } });
    res.status(200).json(patients);
  } catch (err) {
    console.error('Fetch Patients Error:', err);
    res.status(500).json({ message: 'Error fetching patients', error: err.message });
  }
};

// Get patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (err) {
    console.error('Fetch Patient Error:', err);
    res.status(500).json({ message: 'Error fetching patient', error: err.message });
  }
};

// Update patient
exports.updatePatient = async (req, res) => {
  const { name, age, gender } = req.body;

  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    await patient.update({ name, age, gender });
    res.status(200).json({ message: 'Patient updated successfully', patient });
  } catch (err) {
    console.error('Update Patient Error:', err);
    res.status(500).json({ message: 'Error updating patient', error: err.message });
  }
};

// Delete patient
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    await patient.destroy();
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (err) {
    console.error('Delete Patient Error:', err);
    res.status(500).json({ message: 'Error deleting patient', error: err.message });
  }
};
