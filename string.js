const name = "navair"
const repoCount = 50
console.log(`my name is ${name} and my git hub repo is ${repoCount}`);
const gameName = new String ('Navairkhan')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(0,9)
console.log(newString);

const anotherString = gameName.slice(-6,10)
console.log(anotherString);

const userEmail = "    navairkhan123@gmail.com      "
console.log(userEmail.trimEnd());
console.log(userEmail.trimStart());
console.log(userEmail.trim());
// replace 