/*ex1*/
document.write("hello world")
console.log("hello world")
/*end ex1*/
/*ex2*/
document.querySelector("input").value = "exercice terminé"
/*end ex2*/
/*ex3*/
let a = "1"
let b = "2"
let c = a + b
console.log(typeof a)
console.log("a=", a)
console.log(typeof b)
console.log("b=", b)
console.log(typeof c)
console.log("c=", c)
a = a + 0
console.log(typeof a)
b = b + 0
console.log(typeof b)
c = a + b
console.log(typeof c)
console.log("a=", a)
console.log("b=", b)
console.log("c=", c)
/*end ex3*/
/*ex4*/
function allSum() {
  let i = 0
  let sum = 0
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
let a = 10
let b = 12
let c = 5
let d = 89
document.writeln(allSum(a, b, c, d))
/*end of ex4*/
/*ex5*/
function verif() {
  let pr = vtf.value;

  let pattern   = /^\d+$/;
  if (pattern.test(pr)) {
    pr = parseInt(pr)
    n++

    if (pr < vt) {
      document.getElementById('resultat').innerHTML = "le numéro trouvé est plus grand";
      vtf.value = '';
      vtf.focus();
    } else if (pr > vt) {
      document.getElementById('resultat').innerHTML = "le numéro trouvé est plus petit";
      vtf.value = ''
      vtf.focus();
    } else{
      document.getElementById('resultat').innerHTML = "bravo , le numéro trouvé  " + n + " est correct"
    }
  } else {
    document.getElementById('resultat').innerHTML = "entrer un numéro";
  }
  return false;
}
var maxValue = 102;
var vt = Math.floor((Math.random() * maxValue) + 1);
var n = 0;
var vtf = document.getElementById('vtf');

if (vt > maxValue) {
  vt = maxValue;
}
document.getElementById('maxValue').innerHTML = maxValue;
vtf.value = '';
vtf.focus();
}*/