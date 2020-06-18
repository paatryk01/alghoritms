export class StringUtils {

    public toCamelCase(str: string): string {
        return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    public removeUrlAnchor(url: string): string {
        return url.split('#')[0];
    }

    public shortestWord(str: string): string {
        const arr = str.split(' ');
        let current = arr[0];

        for(let word of arr){
            if(word.length < current.length){
                current = word;
            }
        }
        return current;
    }

    public removeDuplicateWord(str: string): string {
        const strArr = str.toLowerCase().split(' ');
        const result = [];

        for(let word of strArr){
            if(result.indexOf(word) === -1){
                result.push(word);
            }
        }
        return result.join(' ');
    }

    public stringEnding(str: string, ending: string): boolean {
        const num = str.length - ending.length;
        return str.indexOf(ending, num) !== -1;
    }

    public countVowels(str: string): number {
        let numOfVowels = 0;
        const vowels = 'aeiouy';
        const newStr = str.split('');

        for(let char of newStr){
            if(vowels.indexOf(char) !== -1){
                numOfVowels++;
            }
        }
        return numOfVowels;
    }

    public isIsogram(str: string): boolean {
        const newStr = str.toLowerCase().split('');
        for(let char of newStr){
            if(newStr.indexOf(char) === -1){
                return true;
            }
        }
        return false;
    }

    public capitalize(str: string): string {
        return str.toLowerCase().split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
    }

    public sortByLongestWord(str: string): string {
        const newArr = str.split(' ');
        return newArr.sort((a, b) => a.length - b.length).join(' ');
    }

    public encrpyt(str: string): string {
        return str.split('').map((char) => {
            let x = str.charCodeAt(0);
            if(x < 65 || x > 90){
                return String.fromCharCode(x); 
            } else if (x < 78){
                return String.fromCharCode(x + 13);
            } else {
                return String.fromCharCode(x - 13);
            }
        }).join('');
    }

    public isPalindrome(str: string): boolean {
        const reversed = str.split('').reverse().join('');
        return reversed === str;
    }

    public isEmpty(str: string): boolean {
        return str.length === 0;
    }

    public trim(str: string): string {
        return str.trim();
    }

    public equals(str1: string, str2: string): boolean {
        return str1 === str2;
    }

    public startsWits(str: string, start: string): boolean {
        return str.indexOf(start) === 0;
    }

    public uppercaseFirstChar(str: string): string { 
        if (str === undefined || str.length <= 1) {
            return str || '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}