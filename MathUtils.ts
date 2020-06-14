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
}