let arr = ['a', '1', 'b', '5', 'c', '9'];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
        count++;
    }
}

console.log("Có " + count + " ký tự số.");
