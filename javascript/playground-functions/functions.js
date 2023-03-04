// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return `A área do triângulo (${base} * ${height}) / 2 = ${(base * height) / 2}`;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase && typeof phrase === 'string' ? phrase.split(' ') : undefined;
}

// Desafio 4
function concatName(array) {
  return `${array.slice(-1)}, ${array.slice(0, 1)}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  return array.reduce((ac, val) => {
    if (val === Math.max(...array)) {
      ac += 1;
    }
    return ac;
  }, 0)
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}