function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let strArr = membershipId.split('');
  console.log(strArr);
  let sum = strArr.reduce(function (total, num) {
    return parseFloat(total) + parseFloat(num);
  });

  while (sum.length > 0) {
    sum = strArr.reduce(function (total, num) {
      return parseFloat(total) + parseFloat(num);
    });
  }

  return sum;
}

console.log(createCheckDigit('55555'));
