const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  assignDoctor,
  getAllMappings,
  getDoctorsForPatient,
  removeMapping
} = require('../controllers/mapping.controller');

router.post('/', auth, assignDoctor);
router.get('/', auth, getAllMappings);
router.get('/:patientId', auth, getDoctorsForPatient);
router.delete('/:id', auth, removeMapping);

module.exports = router;
