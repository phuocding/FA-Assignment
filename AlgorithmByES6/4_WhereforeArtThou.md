## **ES2015**
> Wherefore Art Thou

```javascript
const whatIsInAName = (collection, source) => {
    // What's in a name?
    let arr = [];
    // Only change code below this line
    // Có dùng object.keys lấy ra key String
    let result;
    let sourceKey = Object.keys(source);
    console.log(sourceKey.length);
    // Có dùng hasPrototypeOf để kiểm tra có thuộc tình nào trong prototype của Object đó không.
    // kiểu collection.hasPrototype(keySource) => true
    // Giả định có mảng là các Object => collection
    // source ở đây là những key value trùng khớp
    // khớp thì return ra một mảng mới chứa Object có trùng key value
    return collection.filter((item) => {

        for (var i = 0; i < sourceKey.length; i++) {

            if (item.hasOwnProperty(sourceKey[i]) && item[sourceKey[i]] == source[sourceKey[i]]) {
                result = true;
            }
            else result = false;
        }
        return result;
    });
    // Only change code above this line
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```
