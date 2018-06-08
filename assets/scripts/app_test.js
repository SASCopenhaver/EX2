/*
var vPerson = {
	name: "Sergey",
	color: "Blue",
	greet: function(){
		alert( "Hello "+vPerson.name+" your color is "+vPerson.color+"." )
	},
	walk: function(){
		alert(vPerson.name+" walks fast" );
	}
}

vPerson.greet();
vPerson.walk();
*/

/**** It would be called class in C++ or Java: ****/
/*function f_Person(argName, argColor){
	this.name = argName;
	this.color = argColor;
	this.greet = function(){
		alert("Hello "+this.name+" - "+this.color);
	}
}*/

/* WEBPACK: */
/* Instead of the function above, the code below: */
/* Prior to that: npm install webpack */


/* require is nor JS function, it is NodeJS */
var $ = require("jquery");

//var f_Person = require("./modules/Person");
// es6 scritp:
import f_Person from "./modules/Person";


/* -------------- */
//console.log(f_Person);
//console.log(f_Person.exampleProperty1);

//f_Person.exampleFunction();
//alert("TESTING TESTING webpack Automation TESTING TESTING")
//
//-------------------------------------------------------
class Adult extends f_Person{
	payTaxes(){
		console.log(this.name+" owes nothing");
	}
}
//-------------------------------------------------------
var vSergey = new f_Person("Sergey", "Blue");
vSergey.greet();

//var vAlla = new f_Person("Alla", "Green");
//vAlla.greet();
var vAlla = new Adult("Alla", "Green");
vAlla.greet();
vAlla.payTaxes();



//alert( vSergey.name +" "+ vAlla.color)















