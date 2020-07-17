let Discord = [];
console.log()
Discord.push('Nitro is cool') // creating new output info.
console.log()
Discord.push('Nitro is cheap')
console.log()
Discord.unshift('You should buy nitro')
console.log()
console.log('Position 0 = ' + Discord[0])// '0' indicates the index position, 0 is the starting point.
// easy way to get last element/position.
console.log(Discord[Discord.length-1])
Discord.splice(2, 0,'Nitro is also fun')
// putting a word, phrase in between these two positions.
console.log()
Discord.splice(2, 0)
console.log()
// this deletes the value in possition 1.
Discord[1] = 'Nitro is expensive, but classic nitro is not'
console.log(Discord)
// looping throuh arrays.
for(let i = 0; i < Discord.length; i++) {
    console.log(Discord[i])
}