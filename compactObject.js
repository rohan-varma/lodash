/**
 * Returns an object with all falsey values removed. 
* `0`, `""`, `undefined`, and `NaN` are falsey.
 * This method mutates the input object.
 * @example
 * const o = _.compactObject({
  foo: 'bar',
  b: null,
  c: '',
  d: undefined,
 });
 * returns the object with keys b, c, and d removed.
 */

const compactObject = obj => {

  Object.keys(obj).forEach(prop => {
    if (!obj[prop]) {
      delete obj[prop];
    }
  });

  return obj;
}

// const o = compactObject({
//   foo: 'bar',
//   b: null,
//   e: false,
//   c: '',
//   d: undefined,
// });

// console.log(o);
module.exports = compactObject;

