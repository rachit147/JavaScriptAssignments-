function cache(func) {
    let cachedData = [];
    return function(arg1, arg2) {
        let cacheObject = cachedData.filter(x => (x.arg1 === arg1 && x.arg2 === arg2)),
            result;
        if (cacheObject.length) {
            result = cacheObject[0].result;           
        } else {
            result = func(arg1, arg2);
            cachedData.push(new CacheObj(arg1, arg2, result));
        }
        return result;
    }
}
var CacheObj = function(arg1, arg2, result) {
    this.arg1 = arg1
    this.arg2 = arg2;
    this.result = result;
}