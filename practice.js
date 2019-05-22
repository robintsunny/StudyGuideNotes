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

/*
Given a 32 - bit signed integer, reverse digits of an 
integer.
*/
const reverse = (x) => {
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(2, 31) * -1
    let res = 0
    let n = Math.abs(x)
    let neg = 1;
    if (x < 0) { neg = -1 }

    while (n) {
        let digit = n % 10
        res = res * 10 + digit
        if (res * neg > max || res * neg < min) {
            return 0
        }
        n = Math.floor(n / 10)
    }
    
    return res * neg
};


/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters 
as necessary until the first non - whitespace character is 
found.Then, starting from this character, takes an optional 
initial plus or minus sign followed by as many numerical 
digits as possible, and interprets them as a numerical 
value.

The string can contain additional characters after those 
that form the integral number, which are ignored and have 
no effect on the behavior of this
function.

If the first sequence of non - whitespace characters in str 
is not a valid integral number, or if no such sequence 
exists because either str is empty or it contains only 
whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.
*/
const myAtoi = (str) => {
    let res = 0
        const min = Math.pow(2,31) * -1
        const max = Math.pow(2,31) - 1
        let nums = {
            '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, 
            '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        }

        // skip spaces
        let i = 0
        while (str[i] === ' ') {
            i++
        }
    
        // track negative
        let neg = 1
        if (str[i] === '-' || str[i] === '+') {
            if (str[i] === '-') {
                neg = -1
            }
            i++
        }
    
        for( ; i<str.length; i++) {
            if (!nums[str[i]] && str[i] !== '0') {
                break
            }

            res = res*10 + neg*nums[str[i]]
        }
    
    if (res > max) {return max}
    if(res < min) {return min}
    return res
    
};

/*
Determine whether an integer is a palindrome.An integer is 
a palindrome when it reads the same backward as forward.
*/
const isPalindrome = (x) => {
    if (x < 0) {
        return false
    }

    let res = 0
    let c = x

    // built-in JS
    // const res = parseInt(x.toString().split('').reverse().join(''))

    while (c) {
        const d = c % 10
        c = Math.floor(c / 10)
        res = res * 10 + d
    }

    return res === x
};



/*
Given n non - negative integers a1, a2, ..., an, where each 
represents a point at coordinate(i, ai).n vertical lines 
are drawn such that the two endpoints of line i is at(i, ai) 
and(i, 0).Find two lines, which together with x - axis 
forms a container, such that the container contains the 
most water.
*/
const maxArea = function (h) {

    let vol = 0
    let b = 0               //beginning index
    let e = h.length - 1    //ending index

    while (b < e) {
        const H = Math.min(h[b], h[e])
        const W = e - b

        // set new volume
        if (vol < H * W) {
            vol = H * W
        }

        //move shorter line towards middle
        if (h[b] < h[e]) {
            b++
        } else {
            e--
        }
    }

    return vol
};

/* 
Given an integer, convert it to a roman numeral. Input is 
guaranteed to be within the range from 1 to 3999
*/
const intToRoman = (num) => {
    let res = ''
    let d = 0

    while (num > 0) {
        if (num >= 1000) {
            d = Math.floor(num / 1000)
            num = num % 1000
            if (d === 1) {
                res += 'M'
            } else if (d === 2) {
                res += 'MM'
            } else if (d === 3) {
                res += 'MMM'
            }
        } else if (num >= 100) {
            d = Math.floor(num / 100)
            num = num % 100
            if (d === 1) {
                res += 'C'
            } else if (d === 2) {
                res += 'CC'
            } else if (d === 3) {
                res += 'CCC'
            } else if (d === 4) {
                res += 'CD'
            } else if (d === 5) {
                res += 'D'
            } else if (d === 6) {
                res += 'DC'
            } else if (d === 7) {
                res += 'DCC'
            } else if (d === 8) {
                res += 'DCCC'
            } else if (d === 9) {
                res += 'CM'
            }
        } else if (num >= 10) {
            d = Math.floor(num / 10)
            num = num % 10
            if (d === 1) {
                res += 'X'
            } else if (d === 2) {
                res += 'XX'
            } else if (d === 3) {
                res += 'XXX'
            } else if (d === 4) {
                res += 'XL'
            } else if (d === 5) {
                res += 'L'
            } else if (d === 6) {
                res += 'LX'
            } else if (d === 7) {
                res += 'LXX'
            } else if (d === 8) {
                res += 'LXXX'
            } else if (d === 9) {
                res += 'XC'
            }
        } else if (num >= 1) {
            d = num
            if (d === 1) {
                res += 'I'
            } else if (d === 2) {
                res += 'II'
            } else if (d === 3) {
                res += 'III'
            } else if (d === 4) {
                res += 'IV'
            } else if (d === 5) {
                res += 'V'
            } else if (d === 6) {
                res += 'VI'
            } else if (d === 7) {
                res += 'VII'
            } else if (d === 8) {
                res += 'VIII'
            } else if (d === 9) {
                res += 'IX'
            }
            num = 0
        }
    }
    
    return res
};

/*
Given a roman numeral, convert it to an integer. Input is 
guaranteed to be within the range from 1 to 3999. 
*/

const romanToInt = (s) => {
    const romanToIntMapping = {
        'I': 1,
        'a': 4,
        'V': 5,
        'b': 9,
        'X': 10,
        'c': 40,
        'L': 50,
        'd': 90,
        'C': 100,
        'e': 400,
        'D': 500,
        'f': 900,
        'M': 1000
    }

    return s
        .replace('IV', 'a')
        .replace('IX', 'b')
        .replace('XL', 'c')
        .replace('XC', 'd')
        .replace('CD', 'e')
        .replace('CM', 'f')
        .split('')
        .reduce((finalValue, currentValue) => finalValue + romanToIntMapping[currentValue], 0)
};


/*
Write a function to find the longest common prefix string 
amongst an array of strings. If there is no common prefix, 
return an empty string "".
*/

const longestCommonPrefix = (strs) => {

    if (!strs.length) {
        return ''
    }

    let res = ''
    const first = strs[0]

    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (first[i] !== strs[j][i]) {
                return res
            }
        }
        res += first[i]
    }

    return res
};


/* 
Given an array nums of n integers, are there elements 
a, b, c in nums such that a + b + c = 0? Find all unique 
triplets in the array which gives the sum of zero.
*/
const threeSum = (nums) => {
    const nums2 = nums.sort((a, b) => a - b)
    const res = []
    let last = [null, null, null]

    for (let i = 0; i < nums2.length; i++) {
        if (i !== 0 && nums2[i] === nums2[i-1]){
            continue
        }
        for (let j = i + 1; j < nums2.length; j++) {
            for (let k = j + 1; k < nums2.length; k++) {
                const newLast = 
                    nums2[i] !== last[0] ||
                    nums2[j] !== last[1] ||
                    nums2[k] !== last[2]
                const sum = nums2[i] + nums2[j] + nums2[k] === 0;

                if (sum && newLast) {
                    res.push([nums2[i], nums2[j], nums2[k]])
                    last = [nums2[i], nums2[j], nums2[k]];
                }
            }
        }
    }

    return res

};



/* 
Given a string containing digits from 2 - 9 inclusive, 
return all possible letter combinations that the number 
could represent.
*/

var letterCombinations = function(digits) {
        const num = {
            '1': [''],
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
            '0': ['']
        }
        
    let queue = num[digits[0]];
        let letters, itemFromQueue, queueLength;
        
        // iter over digits
        // iter over res
        // iter over letters
        for (let i = 1; i < digits.length; i++){
            queueLength = queue.length
            letters = num[digits[i]]

            for (let j =0; j<queueLength; j++) {
                itemFromQueue = queue.shift()

                for (k = 0; k<letters.length; k++){
                    queue.push(`${itemFromQueue}${letters[k]}`)
                }
            }
        }
        console.log(queue)
        return queue
};