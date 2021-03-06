function partitionOn(pred, items) {
    var arrayLength, temporary, length = 0;
    arrayLength = items.length;
    for (var index = 0; index < arrayLength; index++) {
        if (!pred(items[index])) {
            temporary = items.splice(index, 1);
            items.splice(length, 0, temporary[0]);
            length++;
        }
    }
    return length;
}
