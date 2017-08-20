/**
 * Check if predicate is truthy for all elements of array.
 * Like _.some, but all elements need to return truthy, instead of one. 
 * The predicate can be invoked with an element and an index.
 * @example
 * const arr = [
{
  foo: true,
},
{
  foo: true,
},
{
  foo: false,
},
];
* all(arr, a => a.foo === true) return false.
 */

function all(array, predicate) {
  let idx = -1;
  const len = array == null ? 0 : array.length;
  while (++idx < len) {
    if (!predicate(array[idx], idx)) {
      return false;
    }
  }
  return true;
}

// const arr = [
// {
//   foo: true,
// },
// {
//   foo: true,
// },
// {
//   foo: false,
// },
// ];

// console.log(all(arr, (a, i) => a.foo === true && i >= 0));



// console.log(o);
module.exports = all;

