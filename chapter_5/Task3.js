function construct(Class) {
    let newObject = Object.create(Class.prototype);
    Class.apply(newObject, Array.from(arguments).slice(1));
    return newObject;
}
 