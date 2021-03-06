## **ES6**
***
> `Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.`

> `Tiêu đè bài toán: Nói chung cho một chuỗi string,
+ Nếu đứng đầu là phụ âm 
	- đưa nguyên âm ngay sau các phụ âm lên đầu
	- đưa các phụ âm ra sau string và add hậu tố 'ay'
+ Nếu đứng đầu là nguyên âm
	- add hậu tố 'way' ra sau string`
```Javascript
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
};

translatePigLatin("Cconsonant");
```
### *Cách này thực sự không nghĩ ra*
```Javascript
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
```
