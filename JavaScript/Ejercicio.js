// Ejercicio resuelto pero hackerrank no lo coge
var arr = [256741038, 623958417, 467905213, 714532089, 938071625]

    function miniMaxSum(arr) {

        const sumAll = []
        var sum = 0;
        var sumMax = 0;
        var sumMin = 0;
    
        for(var i = 0; i < arr.length; i++) {
            for(var j = 0; j < arr.length; j++) {
                var sum = sum + arr[j]
                if(j === (arr.length - 1)) {
                    sum = sum - arr[i]
                    sumAll.push(sum)
                    sum = 0
                }
            }
            if(i === 0) {
                sumMax = sumAll[i]
                sumMin = sumAll[i]
            } else if(sumAll[i] > (sumAll[i - 1])) {
                sumMax = sumAll[i]
            } else if(sumAll[i] < (sumAll[i - 1])) {
                sumMin = sumAll[i]
            }
        }

        return [sumMin, sumMax]
    
    }