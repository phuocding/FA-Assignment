# Synchromous & Asynchronous
***
## AJAX(Asychronous Javascript and XML)
```Javascript
var listCountry;
$("#btnGetData).click(function(){
    $.ajax({
        async: false, //true => undefined
        method: "GET",
        url: "https://restcountries.eu/rest/v1/alpha?codes=vn"
    }).done(function(data)){
        listCountry = data;
        //console.log("Data: " + listCountry[0].name);
    });

    console.log(listCountry[0].name);
});
```
Nếu xét true cho AJAX thì code sẽ xử lí Async => listCountry chưa được gán giá trị