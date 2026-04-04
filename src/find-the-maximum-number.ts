function findMax(nums: number[]): number {
    let maxNumber: number = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(maxNumber < nums[i]) {
            maxNumber = nums[i];
        }
    }

    return maxNumber;
}