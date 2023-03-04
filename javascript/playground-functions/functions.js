// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return `A área do triângulo (${base} * ${height}) / 2 = ${base * height / 2}`;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase && typeof phrase === "string" ? phrase.split(" ") : undefined;
}

// Desafio 4
function concatName(array) {
  return `${array.slice(-1)}, ${array.slice(0, 1)}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  return array.reduce((ac, val) => {
    if (val === Math.max(...array)) {
      ac += 1;
    }
    return ac;
  }, 0);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Position = Math.abs(cat1 - mouse);
  const cat2Position = Math.abs(cat2 - mouse);
  const closer = cat1Position < cat2Position ? "cat1" : "cat2";
  return cat1Position === cat2Position
    ? "os gatos trombam e o rato foge"
    : closer;
}

// Desafio 8
function fizzBuzz(array) {
  return array.map(val => {
    if (val % 3 == 0 && val % 5 == 0) {
      return "fizzBuzz";
    }
    if (val % 3 == 0) {
      return "fizz";
    }
    if (val % 5 == 0) {
      return "buzz";
    }
    return "bug!";
  });
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
