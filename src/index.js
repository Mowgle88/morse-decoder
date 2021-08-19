const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
	for(let i = 0; i < expr.length; i++) {
		let res = '';
		let a = Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === expr[i]);
		// console.log(a)
		if(typeof a === 'undefined'){
			result += '**********';
			continue
		}
		for(let j = 0; j < a.length; j++) {
			if(a[j] === '.') {res += '10'}
			if(a[j] === '-') {res += '11'}
		}
		result += res.padStart(10, "0")
	}
	return result;
}

module.exports = {
    decode
}