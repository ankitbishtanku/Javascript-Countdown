// "use strict";

var a = "hlwwww";
console.log(a);

b = "this is global scope";

function scopeFunc(){
	var scope = "this is local scope";
	console.log(b);
	console.log(scope); 
}
scopeFunc();

console.log(b, "2nd");
console.log(scope, "2nd");