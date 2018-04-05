## ES6
***
> Convert Number To Roman
```Javascript
const convertToRoman = (num) => {
  let result = ''
  const numberic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  // VI = V + I = 5 + 1 = 6
  // IV = V − I = 5 − 1 = 4
  // Don't use the same symbol more than three times in a row
  for (let i = 0, leng = numberic.length; i <= leng; i++) {
    while (num % numberic[i] < num) {
      result += roman[i]
      num -= numberic[i]
    }
  }
  return result
}

convertToRoman(36) // 36 = 30 + 6 = 
// => XXXVI = X + X + X + V + I;
// numberic[1] + numberic[1] + numberic[1] + numberic[4] + numberic[0]  
// = roman[1] + roman[1] + roman[1] + roman[4] + roman[0];
```