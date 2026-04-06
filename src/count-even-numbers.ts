function countEvens(nums: number[]): number {
    let quantityEvens: number = 0;

    for(const num of nums) {
        if(num % 2 === 0) {
            quantityEvens++;
        }
    }

    return quantityEvens;
}