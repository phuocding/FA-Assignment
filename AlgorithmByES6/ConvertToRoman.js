const roman =  {"M" :1000, 
                "CM":900, 
                "D":500, 
                "CD":400, 
                "C":100, 
                "XC":90, 
                "L":50, 	
                "XL":40, 
                "X":10, 
                "IX":9, 
                "V":5, 
                "IV":4, 
                "I":1}
const romanKey = Object.keys(roman)

const convertToRoman = (num) => {
    let rs = ""
  	for (let i of romanKey) {
    let q = Math.floor(num / roman[i])
    num -= q * roman[i];
    rs += i.repeat(q);
  	}
  return rs
}
convertToRoman(36)
 // 36 = 30 + 6 = 10 + 10 + 10 + 5 + 1
// => XXXVI = X + X + X + V + I;
// numberic[1] + numberic[1] + numberic[1] + numberic[4] + numberic[0]  
// = roman[1] + roman[1] + roman[1] + roman[4] + roman[0];