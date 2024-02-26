var express = require('express');
var router = express.Router();
const opinionesControllers = require('../controllers/opiniones-c')

/* GET home page. */
router.get('/', opinionesControllers.mostrar);
router.post('/', opinionesControllers.crear);

module.exports = router;