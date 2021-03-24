const app = require('express');
const {
  register,
  registerValidations,
  login,
  loginValidations,
} = require('../controllers/userController');

const router = app.Router();

router.post('/register', registerValidations, register);
router.post('/login', loginValidations, login);

module.exports = router;
