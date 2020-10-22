const arr1 = [1, 2, 3, 4, 5]
let x = Number(prompt('nhap vao so x'))
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < i; j++) {
        if (i + j == x) {
            console.log("so" + i + "+ so" + j)
        } else {
            console.log("No result")
        }
    }
}