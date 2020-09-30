// var age1 = [4, 5, 2, 8, 9];
// var ages = [6, 8, 3, 1, 7, 5];

// function findMiddle() {
//     var left = 0;
//     var right = 0;

//     for (var i = age.length; i >= 0; i--) {
//         console.log('El elemento con el valor ' + age[i] + ' tiene ' + i + ' elementos a la izquierda')
//     }

// }

// var ageMiddle = ages.length % 2;

// function middle1(age) {
    
//     if((age.length%2) === 0) {
//         for(var i = 0; i > ages.length; i++){
//             var ageMiddle2 = ages.length / 2;
//             var ageMiddle1 = (ages.length / 2) - 1;

//             if(i === ageMiddle1) {
//                 console.log(`El primer numero del medio es ${ages[i]}`)
//             } else if(i === ageMiddle2) {
//                 console.log(`El segundo numero del medio es ${ages[i]}`)
//             }
//         }
//     } else if(ageMiddle === 1) {

//     }
// }



// var numbers = [10, 22, 35, 6, 9, 25, 17, 31, 2];
// var sum1 = 0;
// var sum2 = 0;

// for(var i = 0; i < numbers.length; i++) {
//     if(i < 5) {
//         var sum1 = sum1 + numbers[i];
//     } else if(i >= 5) {
//         var sum2 = sum2 + numbers[i];
//     }
// }

// console.log(`La suma de los primeros 5 numeros es: ${sum1} y la suma despues de los primeros 5 numeros es: ${sum2}`)




// for(var i = 0; i < Array.length; i++) {
//     var total = total + ar[i]
//     return total
// }



var a = [5, 6, 7]
var b = [3, 6 ,10]

function compareTriplets(a, b) {
    var scoreA = 0
    var scoreB = 0
    for(var i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            scoreA += 1
        } else if(a[i] < b[i]) {
            scoreB += 1
        }
    }
    return [scoreA, scoreB]
}
