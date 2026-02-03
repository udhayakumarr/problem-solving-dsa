function isValidPalindrome(num) {
  if (num < 0) return false;

  const xNum = num;

  let reversedNum = 0;

  while (num > 0) {
    const rem = num % 10;
    reversedNum = reversedNum * 10 + rem;
    num = Math.floor(num / 10);
  }

  return xNum === reversedNum;
}

const output = isValidPalindrome(11211);

console.log(output);
