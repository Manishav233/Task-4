var request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
var data=JSON.parse(this.response);
console.log(data);
var flag=data.forEach(element=> {
console.log("Name: "+element.name+" , Region: "+element.region+" , Subregion: " +element.subregion +" , Population: "+element.population);
});
};
