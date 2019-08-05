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






// TITLE: Mumbling
// LEVEL: 7 kyu
// DESCRIPTION:This time no story, no theory. The examples below show you how to write function accum:
// EXAMPLES:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//ANSWER:
// function accum(s) {
//   return s.toUpperCase().split("").map((currentValue, index) => {return currentValue + currentValue.toLowerCase().repeat(index)}).join("-");
// }
//
// console.log(accum("RqaEzty"));






// TITLE: Roman Numberals Encoder
// LEVEL: 6 kyu
// DESCRIPTION: Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
// EXAMPLE: solution(1000); // should return 'M'

// ANSWER:
function solution(number){
  let romanNumeral = "";

  while(number - 1000 >= 0){
    number = number-1000;
    romanNumeral += "M";
  }
  while(number - 500 >= 0){
    if(number >= 900){
      romanNumeral += "CM"
      number = number-900;
    } else{
    number = number-500;
    romanNumeral += "D";
    }
  }
  while(number - 100 >= 0){
    if(number >= 400){
      romanNumeral += "CD"
      number = number-400;
    }else {
      number = number-100;
      romanNumeral += "C";
    }
  }
  while(number - 50 >= 0){
    if(number >= 90){
      romanNumeral += "XC";
      number = number-90;
    }else {
      number = number-50;
      romanNumeral += "L";
    }
  }
  while(number - 10 >= 0){
    if(number >= 40){
      romanNumeral += "XL"
      number = number-40;
    }else {
      number = number-10;
      romanNumeral += "X";
    }

  }
  while(number - 5 >= 0){
    if(number === 9){
      romanNumeral += "IX"
      number = number-9
    } else{
      number = number-5;
      romanNumeral += "V";
    }
  }
  while(number - 1 >= 0){
    if(number === 4){
      romanNumeral += "IV"
      number = number-4;
    }else {
      number = number-1;
      romanNumeral += "I";
    }
  }

  return romanNumeral;
}

console.log(solution(1990));
