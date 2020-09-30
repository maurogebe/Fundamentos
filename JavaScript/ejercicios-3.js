var s = 'saveChangesInTheEditor'

function camelcase(s) {

    var totalWords = 0

    for(var i = 0; i < s.length; i++) {
        if(i === 0) {
            totalWords += 1
        } else if(s.charAt(i) === s[i].toUpperCase()) {
            totalWords += 1
        }
    }

    return totalWords

}


console.log