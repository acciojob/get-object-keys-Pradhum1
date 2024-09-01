//your JS code here. If required.
let student = {
	name: "prince"
};

Object.prototype.getKeys = function() {
	return Object.keys(this);
};

let keys = student.getKeys();
console.log(keys);