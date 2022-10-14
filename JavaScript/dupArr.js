var findDuplicate = function (nums) {
  const swap = (array, first, second) => {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  };

  let i = 0;

  while (i < nums.length) {
    //if [3,4,2,1] 3 => nums[0]-1 => 2

    let currentIndex = nums[i] - 1;

    //nums[0] != nums[2]
    if (nums[i] != nums[currentIndex]) {
      swap(nums, i, currentIndex);
    } else {
      i++;
    }
  }

  return nums[nums.length - 1];
};

console.log(findDuplicate([2, 1, 4, 3, 5, 2]));
