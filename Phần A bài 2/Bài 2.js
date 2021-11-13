let array = []
let output = []

while (true) {
    let input = parseInt(prompt("Mời bạn nhập(Nhập -1 để kết thúc)"))
    if (input == -1) {
        break
    }
    array.push(input) 
}

let team1 = []
let team2 = []

for (let i = 0; i < array.length; i++) {
    if (i == 0) {
        team1.push(array[i])
    }
    else if (i % 2 == 0) {
        team1.push(array[i])
    }
    else if (i % 2 != 0) {
        team2.push(array[i])
    }
}
let a = 0
let b = 0

for (let k = 0; k < team1.length; k++) {
     a += team1[k]
}

for (let j = 0; j < team2.length; j++) {
     b += team2[j]
}

console.log(a)
console.log(b)