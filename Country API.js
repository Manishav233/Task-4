var request= new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(this.response);
console.log(data);
var flag=data.forEach(element=> {
console.log(element.flags);
});

};
