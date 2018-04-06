// Chưa fix được cách này

// ( function () {
//   const translatePigLatin = (str) => {
//   const vowels = ['u', 'e', 'o', 'a', 'i'];
//   for (let vowel of vowels) {
//     if(str[0].toLowerCase() === vowel) {
//         // lowerVowel = vowel.toLowerCase();
//         // if (str.startsWith(lowerVowel)) {
//       str = `${str}way`;
//       return console.log(str);
//     }
//     else {
//       str = `${str.substr(1)}${str[0]}ay`;
//       return console.log(str);
//     }
//   }
// }
// })();

// Cách này đã rút gọn đi rất nhiều

const translatePigLatin1 = (str) => {
  const check = (obj) => {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : `${str.substr(0, check(0)))}ay`);
};

translatePigLatin1("Cconsonant");

// Cách này thực sự không nghĩ ra
const translatePigLatin2 = (str) => {
    let letters = str.split("");
    let vowelRegex = /[aeiou]/;

    if (vowelRegex.test(letters[0])) {
        return `${letters.join("")}way`;
    }

    while (true) {
        if (!vowelRegex.test(letters[0])) {
            letters.push(letters.splice(0, 1));
        } else {
            break;
        }
    }

    str = `${letters.join('')}ay`;

    return str;
};

translatePigLatin2("Cconsonant");
