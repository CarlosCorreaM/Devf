var palindromo = function(){
  var palabra = prompt('ingresa la palabra')
  var x = palabra.split(" ").join("")
  console.log(x);
  var rev = palabra.split("").reverse().join("");
  console.log(rev);
  (x == rev) ? console.log('Es palindromo') :   console.log('No es palindromo');
}
palindromo()
