const olaService = require("../services/olaService");

exports.falarOla = (req, res, next) => {
  try {
    const payload = olaService.mensagemDeOla();
    return res.status(200).json(payload);
  } catch (err) {
    next(err);
  }
};

exports.retornarOperacoes = (req, res, next) => {
  try {
    const q = req.query || {};
    const p = req.params || {};
    const b = req.body || {};

    const rawNum1 = q.num1 ?? p.num1 ?? b.num1;
    const rawNum2 = q.num2 ?? p.num2 ?? b.num2;

    const num1 = Number(rawNum1);
    const num2 = Number(rawNum2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      return res.status(400).json({ error: "num1 e num2 devem ser números válidos" });
    }

    const resultado = olaService.retornaQuatroOperacoes(num1, num2);
    return res.status(200).json({ data: resultado });
  } catch (err) {
    next(err);
  }
};


