function isSantaClausable(obj) {
    let status;false;
    if (typeof obj.distributeGifts === 'function' && typeof obj.goDownTheChimney === 'function' && typeof obj.sayHoHoHo === 'function') {
        status = true;
    }
    return status;
}