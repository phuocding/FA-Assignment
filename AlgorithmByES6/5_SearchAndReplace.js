//str = `cai gi day $(before) cai gi nua hoac 0 co gi`
//   let strToArr = str.split(" ");
//   for (let bef of strToArr) {
//   	if(bef == before ) {
//     	before = after;
// 		return strToArr.join(' ');
//     }
//   }

const myReplace = (str, before, after) => {
    console.log(str.includes(before)); // return true
    if (str.includes(before)) {
        str = before[0] === before[0].toUpperCase()
        ? str.replace(before, `${after[0].toUpperCase()}${after.substr(1)}`) 
        : str.replace(before, after);
    }
    return str;
};

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

