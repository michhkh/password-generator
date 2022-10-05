let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let charArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "@",
  "£",
  "%",
  "&",
  "+",
  "-",
  "€",
];

function genPass() {
  function firstPass() {
    let pass = ""; // Sets pass to be an empty string

    // Adds a random character until i reaches 16 and updates the html content element
    for (let i = 0; i < 16; i++) {
      let ranChar = Math.floor(Math.random() * 43);
      pass = pass + charArray[ranChar];
    }
    text1.textContent = pass;
  }

  function secondPass() {
    let pass = "";
    for (let i = 0; i < 16; i++) {
      let ranChar = Math.floor(Math.random() * 43);
      pass = pass + charArray[ranChar];
    }
    text2.textContent = pass;
  }

  function thirdPass() {
    let pass = "";
    for (let i = 0; i < 16; i++) {
      let ranChar = Math.floor(Math.random() * 43);
      pass = pass + charArray[ranChar];
    }
    text3.textContent = pass;
  }

  function fourthPass() {
    let pass = "";
    for (let i = 0; i < 16; i++) {
      let ranChar = Math.floor(Math.random() * 43);
      pass = pass + charArray[ranChar];
    }
    text4.textContent = pass;
  }

  firstPass(); // Calls the function
  secondPass();
  thirdPass();
  fourthPass();
}
