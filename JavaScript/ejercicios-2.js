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
    var temporary3 = 0
    for(var i = 0; i < candles.length; i++) {
        if((candles[0] != candles[candles.length]) && (candles[0] != candles[candles.length / 2])) {
            if(i === 0) {
                temporary = candles[i]
                for(var k = 0; k < candles.length; k++) {
                    if(temporary >= candles[k]) {
                        temporary3 = temporary
                    } else if(temporary < candles[k]) {
                        temporary3 = candles[k]
                        break
                    }
                }
                if(temporary >= temporary3) {
                    total += 1
                    temporary3 = temporary
                    continue
                } else if(temporary < temporary3) {
                    temporary3 = temporary
                    continue
                }
            } else if(candles[i] >= candles[i - 1]) {
                temporary = candles[i]                
            } else if(candles[i] < candles[i - 1]) {
                temporary = candles[i - 1]
                continue
            }

            if(temporary < temporary3) {
                continue
            } else if(temporary >= candles[i]) {
                for(var j = 0; j < candles.length; j++) {
                    if(candles[j] < temporary3) {
                        continue
                    } else if(temporary >= candles[j]) {
                        temporary2 = temporary
                    } else if(temporary < candles[j]) {
                        temporary2 = 0
                        break
                    }
                }
            }

            if(temporary === temporary2) {
                temporary3 = temporary
                total += 1
            }
        } else {
            for(var i = 0; i < candles.length; i++) {
                if(i === 0) {
                    temporary = candles[i]
                } else if(candles[i] === candles[i - 1]) {
                    temporary = candles[i]
                }
            }
        }
    }

    return total

}