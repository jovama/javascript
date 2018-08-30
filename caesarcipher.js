//after reading a couple of short texts on Sololearn on the topic of cryptography, I decided to try and write a program that would encipher a message
//first is the Caesar Cipher
//this is my first version, I already have lots of ideas on how to improve it. For example, I would like to make a function from this code, as well as to decide what to do with spaces, punctuation, lower/upper case etc.

//for now, the input message will not contain any spaces or punctuation

let message = 'todayisawonderfuldayenjoyitfully';
let secretMessage = '';

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//I am defining a shift number that is divisible by 26 on purpose here - the 26 positions alphabet shift will not encode the message and that's why we have the IF statement below

let shiftNum = 52;

if (shiftNum == 0 || (shiftNum % 26 == 0))
{
	alert('The number of positions to shift the message cannot be 0 or divisible by 26.');
	alert('Changing the shift number to the default: 1');
	shiftNum = 1;
}

for (let messageIndex = 0; messageIndex < message.length; messageIndex++)
{
	let newIndex = alphabet.indexOf(message[messageIndex]) + shiftNum; //increasing the index for the shiftNum of positions

	if (newIndex > 25)
	{
		newIndex -= 26; //since the alphabet has only 26 letters, if the new position's index is greater than 25 (25 and not 26 because we're counting the arrays' elements from 0), we will "reset" the newIndex by subtracting 26 in order to get a number from 0 to 25
	}
	
	secretMessage += alphabet[newIndex]; //concatenating the "secret" string
}

console.log('The old message:', message);

console.log('The new message:', secretMessage);
