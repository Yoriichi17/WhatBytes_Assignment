const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require('../controllers/patient.controller');

// All routes protected
router.post('/', auth, createPatient);
router.get('/', auth, getAllPatients);
router.get('/:id', auth, getPatientById);
router.put('/:id', auth, updatePatient);
router.delete('/:id', auth, deletePatient);

module.exports = router;
