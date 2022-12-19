const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática',
};

const message = ({ nome, idade, profissao }) => {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
};

console.log(message(pessoa));
