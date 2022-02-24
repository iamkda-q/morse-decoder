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
    const res =[];
    for (let i = 0; i < expr.length; i += 10) {
        res.push(expr.slice(i, i + 10));
    }
    return res.map(item => {
        const res =[];
        for (let i = 0; i < item.length; i += 2) {
            res.push(item.slice(i, i + 2));
        }
        return res.reduce((res, item) => {
            switch(item) {
                case "10": return res += ".";
                case "11": return res += "-";
                case "00": return res;
            }
        }, "");
    }).map(item => item ? MORSE_TABLE[item] : " ").join("")
}

module.exports = {
    decode
}
