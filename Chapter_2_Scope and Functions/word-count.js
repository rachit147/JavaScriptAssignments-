function countWords(str) {
    var result;
    str = str.trim();
    if (str) {
        result = str.split(/\s+/).length;
    } else {
        result = 0;
    }
    return result;
}
