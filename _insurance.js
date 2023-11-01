//
function calculateTax(count, maxInsurance, damageAmount) {
    while (count > 0) {
        if (maxInsurance > damageAmount) {
            console.log(damageAmount);
            break;
        }
        console.log(maxInsurance);
        count--;
    }
}
calculateTax(1, 8, 10);
