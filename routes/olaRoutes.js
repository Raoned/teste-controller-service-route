const express = require("express");
const router = express.Router();
const olaController = require("../controller/olaController");

router.get("/ola", olaController.falarOla);

// GET via query params: /api/v1/operacoes?num1=5&num2=3
router.get("/operacoes", olaController.retornarOperacoes);

// GET via route params: /api/v1/operacoes/5/3
router.get("/operacoes/:num1/:num2", olaController.retornarOperacoes);

// POST via JSON body: { "num1": 5, "num2": 3 }
router.post("/operacoes", olaController.retornarOperacoes);

module.exports = router;
