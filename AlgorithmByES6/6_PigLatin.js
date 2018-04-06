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

// Cách này thực sự không nghĩ ra
const translatePigLatin = (str) => {
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

translatePigLatin("Cconsonant");