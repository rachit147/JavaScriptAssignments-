function getMiddle(s) {
    var lengthOfString = s.length;
    var middleIndex = Math.round(lengthOfString / 2);
    var middleCharacters = [];
    if (lengthOfString % 2 == 0) {
        middleCharacters = s.charAt(middleIndex - 1) + s.charAt(middleIndex);
    } else {
        middleCharacters = s.charAt(middleIndex - 1);
    }
    return middleCharacters;
}
