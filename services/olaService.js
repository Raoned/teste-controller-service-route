const mensagemDeOla = () => {
  return { message: "Olá de dentro do Service!",
           status: "success",
           timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Campo_Grande" }) };
   };

module.exports = {
  mensagemDeOla,
};
