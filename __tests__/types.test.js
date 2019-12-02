const {
  isNumber,
  castToNumber,
  getCaster, 
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToString
} = require('../lib/types.js');

describe('types functions', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
    it('properly tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString(3)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean(3)).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
    });
    it('properly tells if a value is an array', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray(true)).toBeFalsy();
      expect(isArray('hi')).toBeFalsy();
      expect(isArray(3)).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(() => {})).toBeFalsy();
    });
 
      it('properly tells if a value is an function', () => {
        expect(isFunction(() => {})).toBeTruthy();
        expect(isFunction({})).toBeFalsy();
        expect(isFunction([])).toBeFalsy();
        expect(isFunction(true)).toBeFalsy();
        expect(isFunction('hi')).toBeFalsy();
        expect(isFunction(3)).toBeFalsy();
      });
     });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString('3')).toEqual('3');
      expect(castToString(true)).toEqual('true');
      expect(castToString(false)).toEqual('false');
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});
