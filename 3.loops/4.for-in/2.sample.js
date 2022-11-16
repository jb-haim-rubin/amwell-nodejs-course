
const singer = "Freddie Mercury"
let nameWithSpace = ''
for(let prop in singer){ //Going through any prop
    nameWithSpace = nameWithSpace + ' ' + singer[prop]
}

console.log(nameWithSpace)