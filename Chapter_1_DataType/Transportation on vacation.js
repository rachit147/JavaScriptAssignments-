function rentalCarCost(totalDays) {
    var finalAmount = 0;
    if (totalDays < 3) {
        finalAmount = totalDays * 40;
    } else if (totalDays >= 3 && totalDays < 7) {
        finalAmount = totalDays * 40 - 20;
    } else {
        finalAmount = totalDays * 40 - 50;
    }
    return finalAmount;
}
