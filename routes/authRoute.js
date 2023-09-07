const express = require('express');
const router = express.Router();
const { authenticateUser: Auth } = require('../middleware/authentication');

const { register , login, logout}  = require('../controllers/authController')

router.post('/register', register);
router.get('/logout', logout);
router.post('/login', login);

module.exports = router;