const express = require("express");
const router = express.Router();

const {
    criarCompra,
    listarCompras,
    atualizarCompra
} = require("../controllers/comprasController");

router.get("/", listarCompras);
router.post("/", criarCompra);
router.put("/:id", atualizarCompra);

module.exports = router;