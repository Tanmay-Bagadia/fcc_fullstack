const passwordChars = (
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "abcdefghijklmnopqrstuvwxyz" +
  "0123456789" +
  "!@#$%^&*()-_=+[]{}|;:'\",.<>?/~`"
).split("");

let passwordArray = [];

for (let i = 0; i < 15; i++) {
  let randVal = Math.floor(Math.random() * passwordChars.length);
  passwordArray[i] = passwordChars[randVal];
}

let passwordString = passwordArray.join("");
console.log(passwordString);
