/*
function f_Person(argName, argColor){
	this.name = argName;
	this.color = argColor;
	this.greet = function(){
		//alert("Hello "+this.name+" - "+this.color);
		console.log("1 Hello "+this.name+" - "+this.color);
	}
}
*/

/* in ES6 replaced by the code below: */
class f_Person {
	constructor(argName, argColor){
		this.name = argName;
		this.color = argColor;
	}	
		
	greet(){
		//alert("2018 Hello "+this.name+" - "+this.color);
		console.log("06-07-2018 Hello "+this.name+" - "+this.color);
	}
}

//module.exports = f_Person;
//es6 version:
export default f_Person;




//console.log("HI from Person.js")

//exports.exampleProperty1 = "This is exports.example";
//exports.exampleFunction = function(){
//	alert("This is exports.example");
//}