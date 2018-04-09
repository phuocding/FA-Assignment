## **ES6**

> DNA Pairing

```Javascript
const pairElement = (str) => {
  // liên kết các cặp base ADN
  // G-C 3 liên kết hidro
  // A-T liên kết 2 hidro
  const basePair = {
    "A": ["A", "T"],
    "T": ["T", "A"],// chua nghi ra cach swap lai
    "C": ["C", "G"],
    "G": ["G", "C"]
  };
  
  return str.split("").map( (i) => {
    return basePair[i];
  });
};

pairElement("TTGAG");
```