function palindrome(message) {
	// wirte your code here
	var str = message.split("").reverse().join("");
	if(message == str) {
		return true;
	} else {
		return false;
	}
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true