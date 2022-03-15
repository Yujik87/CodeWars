// 8kuy

//Comfortable word

/*const comfortableWord = word => {
    let separetedWord = [...word];
    let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
    let odd = [];
    let even = [];


    for (let i=0; i<separetedWord.length; i++){
        if (i % 2 !== 0) {
            odd.push(separetedWord[i]);
        } else {
            even.push(separetedWord[i]);
        }
    }
    console.log(odd);
    console.log(even);

    if (left.includes(odd[0])) {
        return (odd.every(el => left.includes(el)) && even.every(el => right.includes(el)))
    } else {
        return (odd.every(el => right.includes(el)) && even.every(el => left.includes(el)))
    }
};*/


// Square(n) Sum

/*
function squareSum(numbers){
    return numbers.reduce((acc, el) => acc + el**2, 0);
}

console.log(squareSum([1,2,3]))
console.log(squareSum([0,3,4,5]))*/


// Counting sheep...

/*
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, el) => el === true ? acc + 1 : acc, 0)
}

console.log(countSheeps([true, false, true, true]))*/

//Is n divisible by x and y?

/*
function isDivisible(n, x, y) {
     return ((n % x === 0 && n % y === 0) ? true : false)
}

console.log('12/1/3', isDivisible(12,1,3));*/


//Century From Year
/*
function century(year) {
    if (year <= 100) {
        return 1;
    } else {
        return (Math.ceil(year / 100))
    }
}*/
