// CHALLENGE 1 : Add values at the beginning or at the end of an array

var myArray = ['a', 'b', 'c', , 'd'];

myArray.push("end")
myArray.unshift("start")

myArray = ["start",...myArray] // spread operator
myArray = [...myArray, "end"]
myArray = ["start", ...myArray, "end"] 

// CHALLENGE 2 : How do you create a private variable in JS ?

function secretVariable(){
	var private = "super secret code";
	return function(){
		return private
	}
}

var getPrivateVariable = secretVariable()
console.log(getPrivateVariable())
console.log(secretVariable()) // not shown
console.log(private)

// CHALLENGE 3: What is the output ?

var num 4;
function outer(){
	var num = 2
	function inner(){
		num++;
		var num = 3;
		console.log(num)
	}
	inner();
}
outer();

// CHALLENGE 4: What is the output ?

console.log(typeof (typeof 1)); // string

// CHALLENGE 5: What is the output ?

var hero = {
	name: 'John Doe',
	getSecretIdentity: function(){
		return this.name;
	}
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
console.log(hero.name);