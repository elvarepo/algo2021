// remove duplicates from sorted list I
var deleteDuplicates = function(head) {
    if(!head) return head;
    var slow = head;
    var fast = head;
    while(fast){
        if(slow.val !== fast.val){
        slow.next = fast;
        slow = fast;
        }
        fast = fast.next;
    }
        slow.next = null;
    return head;
};


// remove duplicates from sorted list II
var deleteDuplicates = function(head) {
    var slow = new ListNode(null);
    var newHead = slow;
    var fast = head;

    while(fast != null) {
        if (fast.next == null || fast.val != fast.next.val) {
            slow.next = fast;
            slow = fast;
        } else {
            slow.next = null;
            while (fast.next != null && fast.val == fast.next.val) fast = fast.next;
        }
        fast = fast.next;
    }
    return newHead.next;
};

// sort list
var sortList = function(head) {
    let temp = head;
    let arr = [];
    let i = 0;
    while (temp) {
        arr.push(temp.val);
        temp = temp.next;
    };
    arr.sort( (a,b) => a - b);
    temp = head;
    while (temp) {
        temp.val = arr[i++];
        temp = temp.next;
    };
    return head;
};
