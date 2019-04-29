*/ Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.*/
const twoSum = (nums, target) => {
    const sums = {};
    sums[nums[0]] = 0

    for (let i = 1; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (sums[compliment] || sums[compliment] === 0) {
            return [sums[compliment], i]
        } else {
            sums[nums[i]] = i
        }
    }

    return
};