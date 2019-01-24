unction getMiddle(s) {
 var lengthOfString,middleIndex,middleCharacters;
    lengthOfString = s.length;
    middleIndex = Math.round(lengthOfString / 2);
    middleCharacters = [];
    if (lengthOfString % 2 === 0) {
        middleCharacters = s.charAt(middleIndex - 1) + s.charAt(middleIndex);
    } else {
        middleCharacters = s.charAt(middleIndex - 1);
    }
    return middleCharacters;
}
