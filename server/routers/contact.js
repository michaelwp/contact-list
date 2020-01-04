const router = require("express").Router();
const controllerContact = require("../controllers/contact");

router.post('/add', controllerContact.add);
router.get('/', controllerContact.readAll);
router.put('/:id', controllerContact.edit);
router.delete('/:id', controllerContact.delete);

module.exports = router;