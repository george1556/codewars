// TITLE: Your order, please
// LEVEL: 6 kyu
// DESCRIPTION: Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// EXAMPLES:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// ANSWER:
// function order(words){
//   let wordArray = words.split(" ");
//   let newArray = [];
//
//   if(words === ""){
//     return words;
//   }
//
//   for (let i = 0; i < wordArray.length; i++) {
//     for (let j = 1; j < 10; j++) {
//       if(wordArray[i].includes(j)){
//         newArray[j-1] = wordArray[i];
//       }
//     }
//   }
//
//   return newArray.join(" ");
// }
//
// console.log(order("is2 Thi1s T4est 3a"));
