const app = require('express');
const {
  register,
  registerValidations,
} = require('../controllers/userController');

const router = app.Router();

router.post('/register', registerValidations, register);

module.exports = router;
