const olaService = require("../services/olaService.js");

const falarOla = (req, res) => {
  try {
    const message = olaService.mensagemDeOla();
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send("Ocorreu um erro no servidor.");
  }
};

module.exports = {
  falarOla,
};
