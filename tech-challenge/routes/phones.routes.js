const router = require("express").Router();
const PhonesModel = require("../models/Phones.model");

// GET ("/api/phones") -> REnderizamos la lista de teléfonos
router.get("/", async (req, res, next) => {

    try {
        const response = await PhonesModel.find()
        res.json(response)
        return;
    } catch(error) {
        next(error)
    }
})

// GET ("/api/phones/:id") -> Mostramos los detalles del teléfono
router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await PhonesModel.findById(id)
        res.json(response)
    } catch(error) {
        next(error)
    }
})



module.exports = router;
