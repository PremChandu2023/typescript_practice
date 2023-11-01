function calculateBagsPrice(
  totalLines: number,
  ItemsPrice: number,
  phoneNumbers: number[] //1580025
) {
  while (totalLines > 0) {
    for (let eachItem of phoneNumbers) {
      eachItem = eachItem * ItemsPrice;
      if (checkEligibility(String(eachItem))) {
        console.log("YES");
      } else {
        console.log("No");
      }
    }
    totalLines--;
  }
}
function checkEligibility(phoneNumber: string): boolean {
  if (!phoneNumber) {
    if (phoneNumber.length <= 5) {
      if (
        !(
          phoneNumber.valueOf[0] === 0 &&
          phoneNumber.valueOf[phoneNumber.length - 1] === 0
        )
      ) {
        return true;
      }
      return false;
    }
  }

  return false;
}

calculateBagsPrice(1,20,[0]);

