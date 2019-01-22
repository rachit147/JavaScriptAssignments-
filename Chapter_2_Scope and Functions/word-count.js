function countWords(str) {
    str = str.trim();
    if (str) {
        return str.split(/\s+/).length;
    } else {
        return 0;
    }
}
