const verificaPalindromo = (str) => {
  const verificaPalindromo = [...str].reverse().join('') === str;

  return verificaPalindromo;
};

console.log(verificaPalindromo('ana'));
