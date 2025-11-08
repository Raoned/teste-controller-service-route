const olaService = require("../services/olaService");

exports.falarOla = (req, res, next) => {
  try {
    const payload = olaService.mensagemDeOla();
    return res.status(200).json(payload); // changed code: garante JSON consistente
  } catch (err) {
    next(err);
  }
};
