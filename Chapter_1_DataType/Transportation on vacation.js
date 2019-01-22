function rentalCarCost(d) {
    var finalAmount = 0;
    if (d < 3) {
        finalAmount = d * 40;
    } else if (d >= 3 && d < 7) {

        finalAmount = d * 40 - 20;
    } else {
        finalAmount = d * 40 - 50;
    }
    return finalAmount;
}
