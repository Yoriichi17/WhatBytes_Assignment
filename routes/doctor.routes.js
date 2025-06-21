const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctor.controller');

router.post('/', auth, createDoctor);
router.get('/', auth, getAllDoctors);
router.get('/:id', auth, getDoctorById);
router.put('/:id', auth, updateDoctor);
router.delete('/:id', auth, deleteDoctor);

module.exports = router;
