const { isNumber,
  CastError,
  getCaster,
  castToNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToString,
  castToBoolean,
  castToArray } =require('./lib/types.js');
console.log(isNumber('3'));
console.log(isString('3'));
console.log(isBoolean('3'));
console.log(isArray([3]));
console.log(isObject({}));
console.log(isFunction('3'));
console.log(castToBoolean('3'));
console.log(castToString('3'));
console.log(castToNumber('3'));