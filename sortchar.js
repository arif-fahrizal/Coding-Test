const obj = {}, voc = [], con = []

const sortChar = text => {
  text.toLowerCase().replace(/[ ]/g, '').split('').map(a => {
    for(let i of a){
      obj[i] ? obj[i] += 1 : obj[i] = 1
    }
  })
  
  for(let i in obj) {
    i.match(/[aiueo]/g) ? voc.push(i.repeat(obj[i])) : con.push(i.repeat(obj[i]))
  }
}

sortChar('Next Case')

console.log(voc.join(''))
console.log(con.join(''))