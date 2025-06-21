const Mapping = require('../models/Mapping');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Assign a doctor to a patient
exports.assignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.body;

  if (!patientId || !doctorId) {
    return res.status(400).json({ message: 'patientId and doctorId are required' });
  }

  try {
    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json({ message: 'Doctor assigned successfully', mapping });
  } catch (err) {
    console.error('Assign Doctor Error:', err);
    res.status(500).json({ message: 'Error assigning doctor', error: err.message });
  }
};

// Get all mappings
exports.getAllMappings = async (req, res) => {
  try {
    const mappings = await Mapping.findAll({
      include: [{ model: Doctor }, { model: Patient }]
    });
    res.status(200).json(mappings);
  } catch (err) {
    console.error('Fetch Mappings Error:', err);
    res.status(500).json({ message: 'Error fetching mappings', error: err.message });
  }
};

// Get doctors assigned to a specific patient
exports.getDoctorsForPatient = async (req, res) => {
  try {
    const mappings = await Mapping.findAll({
      where: { patientId: req.params.patientId },
      include: [{ model: Doctor }]
    });

    res.status(200).json(mappings);
  } catch (error) {
    console.error('Fetch Patient Doctors Error:', error);
    res.status(500).json({ message: 'Error fetching doctors for patient', error: error.message });
  }
};

// Remove a doctor from a patient
exports.removeMapping = async (req, res) => {
  try {
    const mapping = await Mapping.findByPk(req.params.id);
    if (!mapping) {
      return res.status(404).json({ message: 'Mapping not found' });
    }

    await mapping.destroy();
    res.status(200).json({ message: 'Doctor removed from patient successfully' });
  } catch (err) {
    console.error('Remove Mapping Error:', err);
    res.status(500).json({ message: 'Error removing mapping', error: err.message });
  }
};
