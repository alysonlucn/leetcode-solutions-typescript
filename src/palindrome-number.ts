function isPalindrome(x: number): boolean {
    let inverse: string = x.toString();
    let inverseArray: string[] = [];

    let j = 0;
    for(let i = inverse.length - 1; i > -1; i--) {
        inverseArray[j] = inverse.charAt(i);
        j++;
    }
    
    return inverseArray.join('') === inverse;
}