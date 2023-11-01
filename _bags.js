function calculateBagsPrice(totalLines, ItemsPrice, phoneNumbers //1580025
) {
    while (totalLines > 0) {
        for (var _i = 0, phoneNumbers_1 = phoneNumbers; _i < phoneNumbers_1.length; _i++) {
            var eachItem = phoneNumbers_1[_i];
            eachItem = eachItem * ItemsPrice;
            if (checkEligibility(String(eachItem))) {
                console.log("YES");
            }
            else {
                console.log("No");
            }
        }
        totalLines--;
    }
}
function checkEligibility(phoneNumber) {
    if (!phoneNumber) {
        if (phoneNumber.length <= 5) {
            if (!(phoneNumber.valueOf[0] === 0 &&
                phoneNumber.valueOf[phoneNumber.length - 1] === 0)) {
                return true;
            }
            return false;
        }
    }
    return false;
}
calculateBagsPrice(1, 20, [0]);
