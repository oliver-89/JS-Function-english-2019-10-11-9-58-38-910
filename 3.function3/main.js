function alphabetSort(message) {
	// wirte your code here
	var str = message.split("").sort().join("");
	return str

}
console.log(alphabetSort('hello'));