function partitionOn(pred, items) {
    var arrayLength = items.length;
    var length = 0,
        temporary;
    for (var index = 0; index < arrayLength; index++) {
        if (!pred(items[index])) {
            temporary = items.splice(index, 1);
            items.splice(length, 0, temporary[0]);
            length++;
        }
    }
    return length;
}
