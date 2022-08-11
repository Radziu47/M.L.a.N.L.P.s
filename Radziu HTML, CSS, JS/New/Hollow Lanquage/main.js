import LettersData from "./Data/Alphabet.json" assert {type: "json"};

let p = document.getElementById("po");
p.innerHTML = LettersData.Consonant;

let pi = document.getElementById("pi");
pi.innerHTML = LettersData.Vowel;

let pu = document.getElementById("pu");
pu.innerHTML = LettersData.QuietLetter;

let py = document.getElementById("py");
py.innerHTML = LettersData.QuietLetterVertel[1];