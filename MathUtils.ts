import { ArrayUtils } from './ArrayUtils';
export class MathUtils {

    public factorial(n: number): number {
        let sum = 1;
        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }

    public factorialRecursion(n: number): number {
        if(n === 0){
            return 1;
        } else {
            return n * this.factorialRecursion(n-1);
        }
    }

    public fibo(n: number): number {
        if(n === 0) return 0;
        else if(n === 1 || n === 2) return 1;
        else if(n > 2) return this.fibo(n - 2) + this.fibo(n - 1);
    }

    public maxNumberFromDigits(n: string): number {
        const num: string[] = n.split('');
        const sorted: string[] = num.sort((a, b) => b - a);
        return parseInt(sorted.join(''));
    }

    public sumArr(numbers: number[]): number {
        return numbers.reduce((prevVal, currVal) => {return prevVal + currVal});
    }

    public expo(n: number, e: number): number {
        if(e === 0) return 1;
        else {
            return n * this.expo(n, e - 1);
        }
    }

    public giveMeRange(x: number, y: number): number[] {
        const arr = [];
        for(let i = ++x; i < y; i++) {
            arr.push(i);
        }
        return arr;
    }

    public sumRecursion(arr: number[]): number {
        if (arr.length === 1) {
            return arr[0];
        } else {
            return arr.pop() + sum(arr);
        }
    }

    public sumArray(arr: number[]): number {
        if(arr.length === 1) {
            return arr[0];
        } else {
            return arr.pop() + this.sumArray(arr);
        }
    }

    public timeConversion(time: string): string {
        let hour = parseInt(time.substring(0, 2));
        let timeFormat = time.substring(2, 8);

        if(hour === 12 && time.indexOf('AM') !== -1) {
            return('00' + timeFormat);
        }

        if(hour === 12 && time.indexOf('PM') !== -1) {
            return(time + timeFormat);
        }

        if(hour < 12 && time.indexOf('PM') !== -1) {
            return(12 + hour + timeFormat);
        } else if(hour < 10){
            return('0' + hour + timeFormat);
        } else {
            return(hour + timeFormat);
        }
    }

    public convertToRoman(num: number): string {
        let romanValue = [];
        while(true) {
            if(num >= 1000) {
                num -= 1000;
                romanValue.push('M');
            } else if(num >= 500) {
                if(num >= 1000-100) {
                    num -= 1000-100;
                    romanValue.push('CM');
                } else {
                    num -= 500;
                    romanValue.push('D');
                }
            } else if(num >= 100) {
                if(num >= 500-100) {
                    num -= 500-100;
                    romanValue.push('CD');
                } else {
                    num -= 100;
                    romanValue.push('C');
                }
            } else if(num >= 50) {
                if(num >= 100-10) {
                    num -= 100-10;
                    romanValue.push('XC');
                } else {
                    num -= 50;
                    romanValue.push('L');
                }
            } else if(num >= 10) {
                if(num >= 50-10) {
                    num -= 50-10;
                    romanValue.push('XL')
                } else {
                    num -= 10;
                    romanValue.push('X');
                }
            } else if(num >= 5) {
                if(num >= 10-1) {
                    num -= 10-1;
                    romanValue.push('IX');
                } else {
                    num -= 5;
                    romanValue.push('V');
                }
            } else if(num >= 1) {
                if(num >= 5-1) {
                    num -= 5-1;
                    romanValue.push('IV');
                } else {
                    num -= 1;
                    romanValue.push('I');
                }
            } else {
                break;
            } 
        } return romanValue.join('');
    }
    
    public baseConverter(decNumber: number, base: number): string {
        const remStack = [];
        const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let number = decNumber;
        let rem;
        let baseString = '';
        
        if(!(base >= 2 && base <= 36)) {
            return '';
        }

        while(number > 0) {
            rem = Math.floor(number & base);
            remStack.push(rem);
            number = Math.floor(number / base);
        }

        while(!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }
        return baseString;
    }
}