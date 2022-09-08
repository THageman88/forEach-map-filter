const numbers = [2, 5, 8, 9, 6, 15, 12]

function doubleValues(array) {
   return array.map(function (value) {
      return value * 2;
   });
}

function onlyEvenValues(array) {
   let arr = [];

   array.forEach(function (num) {
      if (num % 2 === 0) {
         arr.push(num);
      }
   });
   return arr;
}

function showFirstAndLast(array) {
   let newArr = [];
   array.forEach(function (value) {
      newArr.push(value[0], value[value.length - 1])
   });
   return newArr;
}

function addKeyAndValue(array, key, value) {
   array.forEach(function (val) {
      val[key] = value;
   });
   return array;
}

function vowelCount(string) {
   const vowels = "aeiou";
   let newObj = {};
   let letterCounter = string.split("");

   letterCounter.forEach(function (letter) {
      let lowerCase = letter.toLowerCase();
      if (vowels.indexOf(lowerCase) !== -1) {
         if (newObj[lowerCase]) {
            newObj[lowerCase]++;
         } else {
            newObj[lowerCase] = 1;
         }
      }
   });
   return newObj;
}

function doubleValuesWithMap(array) {
   return array.map(function (vals) {
      return vals * 2;
   });
}

function valTimesIndex(array) {
   return array.map(function (val, index) {
      return val * index;
   });
}

function extractKey(array, key) {
   return array.map(function (val) {
      return val[key];
   })
}

function extractFullName(array) {
   return array.map(function (val) {
      return val.first + val.last;
   });
}

function filterByValue(array,key){
   return array.filter(function(val){
      return val[key] !== undefined; 
   });
}

function find (array , searchValue){
   return array.filter(function(val){
      return val === searchValue;
   });[0];
}

function findInObj (array, searchValue , key){
   return array.filter(function(val){
      return val[key] === searchValue ;
   }); [0];
}

function removeVowels (string){
   const vowels = "aeiou";
   return string.toLowerCase.split("").filter(function(val){
      return vowels.indexOf(val) === -1 ;
   }).join("");
}

function doubleOddNumbers(array){
   return array.filter (function(val){
      return val %2 !== 0 ;
   })
   .map (function(val){
      return val*2;
   });
}