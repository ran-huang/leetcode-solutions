var isPalindrome = function(head) {
  let pointer = head;
  let forward = [];
  let backward = [];
  while (pointer != null) {
      forward.push(pointer.val);
      backward.unshift(pointer.val);
      pointer = pointer.next;
  }

  // compare forward and backward
  return forward.every((ele, index) => ele === backward[index]);
};


