function sortArrayDescending(arr) {
    
    arr.sort(function(a, b) {
        return b - a; 
    });
}


const numbers = [5, 1, 9, 3, 7];
sortArrayDescending(numbers);

console.log(numbers); 