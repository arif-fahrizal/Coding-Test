const vowels = vowels => {
    const str = vowels.toLowerCase().match(/[aiueo]/g), 
    obj = {}, text = []

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = [];
        }
        obj[str[i]]++;
    }

    for (const [key, value] of Object.entries(obj)) {
        for (let i = 0; i < value; i++) {
            text.push(key);
        }
    }

    return text.join('')
};

const consonant = consonant => {
    const str = consonant.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g);
    const obj = {}, text = []

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = [];
        }
        obj[str[i]]++;
    }

    for (const [key, value] of Object.entries(obj)) {
        for (let i = 0; i < value; i++) {
            text.push(key);
        }
    }
    return text.join('')
};

console.log(vowels('Sample Case'))
console.log(consonant('Sample Case'))