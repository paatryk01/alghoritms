export class ArrayUtils {
    
    public chunk(array: Array<any>, size: number = 1): Array<any>{
        return [array.slice(0, size)].concat(this.chunk(array.slice(size), size));
    }

    public uniq<T>(array: T[], sort: boolean = false): T[]{
        return sort ? [...new Set(array)].sort() : [...new Set(array)];
    }

    public isEmpty(array: any[]): boolean {
        return array.length === 0;
    }
}