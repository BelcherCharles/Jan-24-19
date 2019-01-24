// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let buildMeUp = ""
// let punctuation = ""
let times = ""
let mark = ""
let markString = ""
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

// into empty string holder
function addMarks(mark, times) {
    for (i = 0; i < times; i++){
        (markString = `${markString} ${mark}`)
    }
}

function addExcitement(theWordArray, mark, times) {
    addMarks(mark, times)
    for (let i = 0; i < theWordArray.length; i++) {
            if (i != 0 && i % 3 === 0){
            // buildMeUp.push(`${theWordArray[i]} ${markString}`);
            buildMeUp = `${buildMeUp} ${theWordArray[i]} ${markString}`
            console.log(buildMeUp);
        } else {
            // buildMeUp.push(theWordArray[i]);
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
            console.log(buildMeUp);
        }
    }
}


// alternatively, into empty array, the .join()
// function addMarks(mark, times) {
//     for (i = 0; i < times; i++){
//         (markString = `${markString} ${mark}`)
//     }
// }

// function addExcitement(theWordArray, mark, times) {
//     addMarks(mark, times)
//     for (let i = 0; i < theWordArray.length; i++) {
//             if (i != 0 && i % 3 === 0){
//             buildMeUp.push(`${theWordArray[i]} ${markString}`);
//             // buildMeUp = `${buildMeUp} ${theWordArray[i]} ${markString}`
//             console.log(buildMeUp);
//         } else {
//             buildMeUp.push(theWordArray[i]);
//             // buildMeUp = `${buildMeUp} ${theWordArray[i]}`
//             console.log(buildMeUp);
//         }
//     }
// }

addExcitement(sentence, "^", 4)

