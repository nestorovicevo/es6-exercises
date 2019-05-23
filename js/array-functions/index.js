// links:
// https://www.geeksforgeeks.org/check-whether-an-array-is-subarray-of-another-array/
// https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://gomakethings.com/checking-if-two-arrays-are-equal/

import { find, keys } from 'lodash-es'

export function testArrayFunctions () {
  // convert array to object
  var sum = [{x: 1}, {y: 2}, {z: 3}].reduce(function (accumulator, currentValue) {
    return { ...accumulator, ...currentValue }
  })

  console.log(sum)

  const content = {
    a: {
      id: 1
    },
    b: 'test',
    c: {
      id: 3
    }
  }

  const d = {
    id: 3
  }

  const found = find(keys(content), key => content[key].id === d.id)
  console.log(found)

  const initPath = [1, 2, 3, 4]
  const path = [1, 2, 3, 45, 5]

  // console.log(initPath.length === path.length && initPath.filter((item, index) => item === path[index]).length === path.length)
  console.log(path.filter((item, index) => item === initPath[index]).length)
  // console.log(initPath.filter((item, index) => item === path[index]).length <= path.length)

  const arr1 = [1, 2, 3]
  const arr2 = [1, 2, 3]

  console.log('arr2 includes arr1 items')
  console.log(arr1.every(item => arr2.includes(item)))

  console.log('arr1 equal to arr2 without items permutations')
  console.log(JSON.stringify(arr1) === JSON.stringify(arr2))
}
