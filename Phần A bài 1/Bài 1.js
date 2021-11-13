let array = []
let output = []

while (true) {
    let input = prompt("Mời bạn nhập(Nhập -1 để kết thúc)")
    if (input == -1) {
        break
    }
    array.push(input) 
}

let longest = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
        longest = array[i]
    }
}

output.push(longest);

for (let k = 0; k < array.length; k++) {
    if (array[k].length == longest.length) {
        output.push(array[k])
    }
}

for (let n = 0; n < output.length; n++) {
    if (output[n] === longest) {
        delete output[n]
    }
}
output.push(longest)
console.log(output)