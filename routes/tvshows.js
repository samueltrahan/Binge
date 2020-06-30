const router = require('express').Router();
const tvshowsCtrl = require('../controllers/tvshows');


router.post('/', tvshowsCtrl.create);
router.get('/', tvshowsCtrl.index);
router.delete('/:id', tvshowsCtrl.delete);
router.get('/:id', tvshowsCtrl.show);
router.put('/:id', tvshowsCtrl.update);


module.exports = router;