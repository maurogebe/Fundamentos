var candles = [44, 53, 31, 27, 77, 60, 66, 77, 26, 36]


// function birthdayCakeCandles(candles) {
//     var total = 0;
//     var temporary = 0
//     var temporary2 = 0
//     for(var i = 0; i < candles.length; i++) {
//         temporary2 = candles[i]
//         for(var j = 0; j < candles.length; j++) {
//             if(candles[j] >= temporary2) {
//                 temporary = candles[j]                
//             } else if(candles[j] < candles[i]) {
//                 temporary = temporary2
//             }
//             temporary2 = temporary
//         }
//         if(temporary === candles[i]) {
//             total += 1
//         }
//     }

//     return total

// }

function birthdayCakeCandles(candles) {
    var total = 0;
    var temporary = 0
    var temporary2 = 0
    for(var i = 0; i < candles.length; i++) {
        if(i === 0) {
            temporary = candles[i]
            for(var k = 0; k < candles.length; k++) {
                if(temporary >= candles[k]) {
                    temporary2 = temporary
                } else if(temporary < candles[k]) {
                    temporary2 = candles[k]
                    temporary = candles[k]
                }
            }
            if(candles[i] >= temporary2) {
                total += 1
                continue
            } else if(candles[i] < temporary2) {
                continue
            }
        } else if(candles[i] >= temporary2) {
            total += 1
            continue
        } else if(candles[i] < temporary2) {
            continue
        }
    }
    return total

}