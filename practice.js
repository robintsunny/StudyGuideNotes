/* Given an array of integers, return indices of the two 
numbers such that they add up to a specific target. You 
may assume that each input would have exactly one solution, 
and you may not use the same element twice.*/
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


/* You are given two non-empty linked lists representing 
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