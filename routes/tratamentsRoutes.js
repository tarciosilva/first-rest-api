const { Router } = require("express");
const router = Router();
const {
    getTratamentsController,
    getTratamentByIdController,
    setTratamentController,
    delTratamentController,
    delTratamentByIdController,
    upDateTratamentController
} = require('../controlers/tratamentsControler');

router.get('/', getTratamentsController);
router.get('/:id', getTratamentByIdController);

router.post('/', setTratamentController);

router.delete('/', delTratamentController);
router.delete('/:id', delTratamentByIdController);

router.patch('/:id', upDateTratamentController)

module.exports = router;
