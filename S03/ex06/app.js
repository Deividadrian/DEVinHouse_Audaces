const verificaPalindromo = (str) => {
  const strLowerCase = str.toLowerCase();
  const palimetro = [...strLowerCase].reverse().join('') === strLowerCase;

  return palimetro;
};

console.log(verificaPalindromo('Pna'));
