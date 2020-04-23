// Return the longest word and length of this word.

let str = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

function longestWord(str){
	let words = str.split(' ');
	maxLength = 0;
	word='';

	for(var i = 0; i < words.length; i++){
		if(words[i].length > maxLength){
			maxLength = words[i].length;
			word = words[i];
		}
	}
	return [word, maxLength];
}

// The longest word. Recursive method.

function longestWordRecursive(str){
	str = str.split(' ');
	if(str.length === 1){
	    return [str[0], str[0].length];
	}
	if(str[0].length >= str[1].length){
		str.splice(1,1);
		return longestWordRecursive(str.join(' '));
	}
	if(str[0].length <= str[1].length){
		return longestWordRecursive(str.slice(1, str.length).join(' ')); //Wykonuje funkcję dla nowej kopii tablicy za wyjątkiem 1 elementu.
	}
	return str.length;
}

console.log(longestWordRecursive(string));

// Palindrom

function isPalindrom(str){
	let reversed = str.split('').reverse().join('');
	return str === reversed ? true : false;
}

// Seek and destroy 

let baseArray = [23, 12, 34, 234, 78, 153, 987, 12, 43, 67],
    filterArray = [34, 67, 32, 34, 98, 54, 67, 89, 345, 234];

function filter(arr, arr1){
	return arr.filter((val) => { // Filter tworzy nową tablicę, która spełnia dany warunek.
		return !arr1.includes(val);
	});
}

console.log(filter(baseArray, filterArray));

// Find index of new number added to array.

function findII(arr,num){
	arr.push(num);
	arr.sort((a,b) => {
		return a-b;
	});
	return [arr, arr.indexOf(num)];
}

// Encrypt - Szyfr Cezara

function encrypt(str) {
    return str.split('').map((char) => { //Tworzymy nową tablicę, do której dodajemy literę pobraną z fromCharCode.
        x = char.charCodeAt(0);
        if(x < 65 || x > 90) { // 65-A 90-Z
            return String.fromCharCode(x); 
        }
        else if (x < 78) { // Po wyżej 78 po dodaniu 13, nie wyświetli litery, ponieważ maksymalanie = 90.
            return String.fromCharCode(x + 13);
        }
        else{
            return String.fromCharCode(x - 13);
        }
    }).join('');
}

// Sort by longest word 

function sortByLength(array){
	return array.sort(function(a,b){
		return a.length - b.length;
	});
}

// Longest digit 

function longestDigit(array){
	var newArr = array.map(function(e){
		return e.toString(); //Zamiana każdej cyfry w stringa
	});
	newArr.sort((a,b) => {
		return b.length - a.length;
	});
	return parseInt(newArr[0]); //Zamiana stringa w cyfrę
}

// Capitalize 

function capi(str){
    const newArr = str.toLowerCase().split(' ');
    for(let i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i].substring(0, 1).toUpperCase() + newArr[i].substring(1); //Substring(0,4) dla Javascript = Java. Mozna użyć slice'a.
    } 
    return newArr.join(' ');
}

// Capitalize2 

function capitalize2(str){
    return str.toLowerCase().split(' ').map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}

// Valid Coupon (Code and Date)

function couponIsValid(enteredCode, currentCode, currentDate, expirationDate){
	return enteredCode === currentCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}

// DUBSTEP Find WUB and replace for ' '

function songDecoder(song) {
	var regExp = /(WUB)+/g;
	return song.replace(regExp, ' ').trim();
}

// abcd => A-Bb-Ccc-Dddd

function accum(s){
	return s.split('')
	.map((element,index) => element.toUpperCase() + element.toLowerCase().repeat(index))
	.join('-');
}

// isIsogram ? repeated letters = false

function isIsogram(str){
	
  str = str.toLowerCase()
  for (var i = 0; i < str.length; i++){
    if (str.indexOf(str.charAt(i), i + 1) >= 0){
      return false
    }
  }
  return true
}

// Fizz Buzz

function fizzbuzz(n){
	for(let i = 1; i <= n; i++){
		if(i % 3 === 0 && i % 5 === 0){
			console.log('fizzbuzz');
		} else if (i % 3 === 0){
			console.log('fizz');
		} else if (i % 5 === 0){
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}

// Sum of digit 

function sumDigits(number) {
  return Math.abs(number) // moduł
  .toString() // zamiana z integera na stringa
  .split('')
  .reduce(function(a,b){ // sprowadzenie do pojedynczej wartości
    return +a + +b // uniknięcie konkatenacji
    }, 0); // 0 - wartość początkowa
}

// Is anagram ?

function isAnagram(stringA, stringB){
	stringA = stringA.replace(/[^\w]/,'').toLowerCase();
	stringB = stringB.replace(/[^\w]/,'').toLowerCase();
	
	return sortString(stringA) === sortString(stringB);
	
	function sortString(str){
		return str.split('').sort().join('');
	}
}

// Alternate capitalization. 

function capitalize(s){
	const odd = s.split('').map((char,index) => index % 2 === 0 ? char.toUpperCase() : char).join('');
	console.log(odd); // Litera z parzystym indeksem toUpperCase
	const even = s.split('').map((char,index) => index % 2 !== 0 ? char.toUpperCase() : char).join('');
	console.log(even); // Litera z nieparzystym indeksem toUpperCase
	
	return [odd, even];
}

// Count vowels

function vowels(str){
	let numOfVowels = 0;
	const vowels = 'aeiouy';
	
	for(let i = 0; i < str.length; i++){
		if(vowels.indexOf(str[i]) !== -1){
			numOfVowels += 1;
		}
	}
	return numOfVowels;
}

// Min value from digit Test.assertEquals(minValue([1, 3, 1]), 13);

function minValue(values){
	newArr = [];
	for(let i = 0; i < values.length; i++){
		if(newArr.includes(values[i]) === false){
			newArr.push(values[i]);
		}
	}
	return parseInt(newArr.sort(function(a,b){return a-b}).join(''));
}

// Two to One

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,
//each taken only once — coming from s1 or s2.

function longest(s1, s2) {
  var newS1 = [];
  var newS2 = [];
  for(let i = 0; i < s1.length; i++){
    if(newS1.includes(s1[i]) === false){
      newS1.push(s1[i]);
    }
  }
  for(let i = 0; i < s2.length; i++){
    if(newS2.includes(s2[i]) === false){
      newS2.push(s2[i]);
    }
  }
  var newArr = newS1.concat(newS2);
  var newArr2 = [];
  for(let i = 0; i < newArr.length; i++){
        if(newArr2.includes(newArr[i]) === false){
            newArr2.push(newArr[i]);
        }
    }
  return newArr2.sort().join('');
}

// Two to One second

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Two to One third

function longest(s1, s2) {
	let str = new Set([...s1, ...s2]);
	return [...str].sort().join('');
}

// Sort the odd, even (this same place) 

function sortArray(array) {
  const odd = [];
  const even = [];
  const result = [];
  
  for(let i = 0; i < array.length; i++){
    array[i] % 2 === 0 ? even.push(array[i]) : odd.push(array[i]);
  }
  
  odd.sort((a,b) => a - b);
  
  for(let i = 0; i < array.length; i++){
    array[i] % 2 === 0 ? result.push(even.shift()) : result.push(odd.shift());  // Dodajemy do result pierwszy element z Odd lub Even jednocześnie go usuwając
  }
  return result;
}

// String ends with ? 

function solution(str, ending){
  var num = str.length - ending.length;
  return str.indexOf(ending, num) !== -1;
}

// Uppercase first letter in every word

function toJadenCase(str) {
  return str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
};

// Convert string with - _ to camelCase 

function toCamelCase(str){
	str = str.split('');
	return str.map(function(el,i){
		if(el === '-' || el === '_'){
			el = str[i+1].toUpperCase(); //jeżeli el jest równe - lub _ to el jest nadpisywnane następującym go znakiem, który jest powiększony
			str.splice(i+1, 1); //następny znak jest usunięty
		}
		return el; 
	}).join('');
}

// [1, 1, 1, 2, 1] = 2 

function stray(numbers) {
  const nums = numbers.sort();
  
  if(nums[0] === nums[1]){
    return nums[nums.length-1];
  } else {
    return nums[0];
  }
}

// Array has 3 numbers, return index of mean

var gimme = function (inputArray) {
  let sorted = [...inputArray].sort(function(a,b) {return a-b});
  return inputArray.indexOf(sorted[1]);
};

// Remove duplicat words

function removeDuplicateWords (s) {
  const newArr = [];
  const newS = s.split(' ');
  for(let i = 0; i < newS.length; i++){
    if(newArr.indexOf(newS[i]) === -1){
      newArr.push(newS[i]);
    }
  }
  return newArr.join(' ');
}

// Remove duplicate words 2

function removeDuplicateWord(str){
	str = str.toLowerCase().split(' ');
	const result = [];

	for(let word of str){
		if(result.indexOf(word) === -1){
			result.push(word);
		}
	}
	return result.join(' ');
}

// Shortest word

function findShort(s){
  var arr = s.split(' ');
  var shortest = arr[0];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length < shortest.length){
      shortest = arr[i];
    }
  }
  return shortest.length;
}

// Remove everything what is behind # in url

function removeUrlAnchor(url){
  var arr = url.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '#'){
      arr.splice([i]);
    }
  }
  return arr.join('');
}

// Faster way /\

function removeUrlAnchor(url){
  return url.split('#')[0]; // rozdziela url w miejscu gdzie jest hash i zwraca pierwszy człon czyli [0]
}

// Factorial 

function factorial(n){
	var sum = 1;
	for(let i = 1; i <= n; i++){
		sum *= i;
	}
	return sum;
}

// Dashatize odd -- ...

function dashatize(num) {
  return num.toString().
    replace(/([13579])/g,'-$1-').// dashes around odd digits ????????
    replace(/\-+/g,'-'). // replace multiple dashes by one dash
    replace(/^\-/,''). // remove starting dash
    replace(/\-$/,'');// remove ending dash
}

// camelCase

function CamelCase(str){
  return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

// Return index of capitalize letter

function (word) {
  const arr = [];
  const letters = word.split('');
  for(let i = 0; i < letters.length; i++){
    if(letters[i] === letters[i].toUpperCase()){
      arr.push(i);
    }
  }
  return arr;
};

// Exponentiation - potęgowanie rekurencja

function expo(num, e){
	if(e === 0) return 1;
	else{
		return num * expo(num, e-1);
	}
}

// Factorial - silnia rekurencja

function factorial(n){
	if(n === 0) return 1;
	else{
		return n * factorial(n-1);
	}
}

// Sum with rest

function sum(...nums){
  return nums.reduce((prevVal, currVal) => {return prevVal + currVal});
}

// Max number from the digits

function maxNumber(n){
  const num = n.toString().split('');
  const sorted = num.sort(function(a,b){return b - a});
  return parseInt(sorted.join(''));
}

// FIBONACCI rekurencja

function fibo(n){
    if(n === 0) return 0;
    else if(n === 1 || n === 2) return 1;
    else if(n > 2) return fibo(n-2) + fibo(n-1);
}

// FIBONACCI iteracja

function fibo(n){
	let first = 0;
	let second = 1;
	let temp;
	for(let i = 0; i <= n; i++){
		if(i > 1){
			temp = first + second;
			first = second;
			second = temp;
		} else {
			temp = i;
		}
	}
	return temp;
}
