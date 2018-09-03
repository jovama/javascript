//after reading a couple of short texts on Sololearn on the topic of cryptography, I decided to try and write a program that would encipher a message
//first is the Caesar Cipher
//this is my second version, in which I made a function from the code in the first version. I know there are multiple ways to improve this, for example, I would need to decide what to do with spaces, punctuation, lower/upper case etc.

//for now, the input message will not contain any spaces or punctuation

//let message = 'todayisawonderfuldayenjoyitfully';
let message = 'abcdefghijklmnopqrstuvwxyz';
let secretMessage;

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let shiftNum = 3; //bear in mind that shiftNum should not be 0 or divisible by 26 - in that case, no change will be made to the message

//if the shift number is 0 or divisible by 26, we will alert the user and set the shift number to default value of 1 
if (shiftNum == 0 || (shiftNum % 26 == 0))
{
	alert('The number of positions to shift the message cannot be 0 or divisible by 26.');
	alert('Setting the shift number to the default: 1');
	shiftNum = 1;
}

//creating a function with 2 parameters - the message to encode and the shift number
function messageEncoder(message, shiftNum)
{
	secretMessage = ''; //"emptying" this string, in case of multiple function calls
	console.log('The old message is:', message);
	
	for (let messageIndex = 0; messageIndex < message.length; messageIndex++)
	{
		let newIndex = alphabet.indexOf(message[messageIndex]) + shiftNum; //increasing the index for the shiftNum of positions

		if (newIndex > 25)
		{
			newIndex -= 26; //since the alphabet has only 26 letters, if the new position's index is greater than 25 (25 and not 26 because we're counting the arrays' elements from 0), we will "reset" the newIndex by subtracting 26 in order to get a number from 0 to 25
		}
	
		secretMessage += alphabet[newIndex]; //concatenating the "shifted" letters into our "secret" string
	}
	
	return console.log('The new message is:', secretMessage);
}

//adding function calls
messageEncoder(message, shiftNum);

messageEncoder('letstrysomethingnew', 2);
