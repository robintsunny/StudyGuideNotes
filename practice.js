/* 
Given an array of integers, return indices of the two 
numbers such that they add up to a specific target. You 
may assume that each input would have exactly one solution, 
and you may not use the same element twice.
*/
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


/* 
You are given two non-empty linked lists representing 
two non-negative integers. The digits are stored in reverse 
order and each of their nodes contain a single digit. Add 
the two numbers and return it as a linked list.

function ListNode(val) {
    this.val = val;
    this.next = null;
}
*/
const addTwoNumbers = (l1, l2) => {
    let node1 = l1.next;
    let node2 = l2.next;
    let v;
    let carry = 0;

    if (l1.val + l2.val > 9) {
        v = l1.val + l2.val - 10;
        carry = 1
    } else {
        v = l1.val + l2.val;
    }

    const res = new ListNode(v)
    let node = res;


    while (node1 || node2) {
        if (node1 && node2) {
            val = node1.val + node2.val + carry
            carry = 0
            if (val > 9) {
                carry = 1
                val = val - 10
            }
            node1 = node1.next;
            node2 = node2.next
        } else if (node1) {
            val = node1.val + carry
            carry = 0
            if (val > 9) {
                carry = 1
                val = val - 10
            }
            node1 = node1.next;
        } else if (node2) {
            val = node2.val + carry
            carry = 0
            if (val > 9) {
                carry = 1
                val = val - 10
            }
            node2 = node2.next;
        }

        newNode = new ListNode(val)
        node.next = newNode
        node = node.next
    }

    if (carry === 1) {
        node.next = new ListNode(1)
    }

    return res
};


/*
Given a string, find the length of the longest substring 
without repeating characters.
*/
const lengthOfLongestSubstring = (s) => {
    let letters = {};
    let winner = 0;
    let i = 0;
    let j;

    for (j = 0; j < s.length; j++) {
        const char = s[j]

        if (letters[char] >= i) { i = letters[char] + 1 }
        letters[char] = j

        if (j - i + 1 > winner) { winner = j - i + 1 }

    }

    return winner
};


/* 
There are two sorted arrays nums1 and nums2 of size m 
and n respectively. Find the median of the two sorted arrays.
The overall run time complexity should be O(log(m + n)). 
*/

const findMedianSortedArrays = (nums1, nums2) => {
    const nums = [...nums1, ...nums2]
    const sorted = quickSort(nums)
    const sortedLength = sorted.length;

    if (sortedLength % 2 === 0) {
        //4 => 1,2
        const mid = sortedLength / 2
        const ans = (sorted[mid - 1] + sorted[mid]) / 2
        return ans
    } else {
        return sorted[Math.floor(sortedLength / 2)]
    }
};

const quickSort = (arr) => {
    const arrLength = arr.length
    if (arrLength <= 1) {
        return arr
    }

    const pivot = arrLength - 1
    const left = arr.filter(el => el < arr[pivot])
    const middle = arr.filter(el => el === arr[pivot])
    const right = arr.filter(el => el > arr[pivot])

    return quickSort(left).concat(middle).concat(quickSort(right))
}

/*
Given a string s, find the longest palindromic substring in
s.You may assume that the maximum length of s is 1000.
*/
const longestPalindrome = (s) => {
    let max = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            if ((right - left - 1) > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};


/*
The string "PAYPALISHIRING"
is written in a zigzag pattern on a given number of rows 
like this: (you may want to display this pattern in a fixed
font for better legibility)

P     I     N
A   L S   I G
Y A   H R
P     I
*/
const convert = (s, numRows)  => {
    if (numRows === 1) {
        return s;
    }

    const N = s.length;
    const arr = [...Array(numRows)].map(r => []);

    for (let i = 0; i < N; i++) {
        const pos = i % (2 * numRows - 2);
        const ii = pos < numRows ? pos : 2 * numRows - 2 - pos;
        arr[ii].push(s[i]);
    }

    return arr.map(r => r.join('')).join('');
}