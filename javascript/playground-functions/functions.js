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
function encode(string) {
  return string.replace(/[aeiou]/g, vowel => {
    switch (vowel) {
      case "a":
        return 1;
      case "e":
        return 2;
      case "i":
        return 3;
      case "o":
        return 4;
      case "u":
        return 5;
    }
  });
}

function decode(string) {
  return string.replace(/[12345]/g, vowel => {
    switch (vowel) {
      case "1":
        return "a";
      case "2":
        return "e";
      case "3":
        return "i";
      case "4":
        return "o";
      case "5":
        return "u";
    }
  });
}

// Desafio 10
function techList(array, name) {
  if (array.length < 1) {
    return "Vazio!";
  }
  return array
    .map(technology => {
      return { tech: technology, name: name };
    })
    .sort((a, b) => a.tech.localeCompare(b.tech));
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
