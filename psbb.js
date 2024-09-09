const ps = require('prompt-sync')
const prompt = ps()

let nFamilies = prompt('Input the number of families: ')
let nMembers = prompt('Input the number of members in the family: ')

const members = nMembers.replace(/[ ]/g, '').split("").map(Number)
const buses = Math.ceil(members.reduce((a, b) => a + b) / 4)

members.length < nFamilies
  ? console.log("Input must be equal with count of family")
  : console.log(`Minimum bus required is: ${buses}`)
