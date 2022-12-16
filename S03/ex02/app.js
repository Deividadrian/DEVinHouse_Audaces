const inputNome = document.querySelector('#name');
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

btn.addEventListener('click', (e) => {
  return (text.innerHTML = `Olá, ${mensagemOla(inputNome)}!`);
});

const mensagemOla = (inputNome) => {
  const nome = inputNome;
  return nome.value;
};
