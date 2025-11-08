const mensagemDeOla = () => {
  return { message: "Olá de dentro do Service!",
           status: "success",
           timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Campo_Grande" }) };
   };

const retornaQuatroOperacoes = (num1, num2) => {
  const a = Number(num1);
  const b = Number(num2);
  return {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: b === 0 ? null : a / b
  };
};


module.exports = {
  mensagemDeOla,
  retornaQuatroOperacoes,
};
