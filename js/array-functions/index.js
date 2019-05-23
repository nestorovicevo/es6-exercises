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

  // console.log(initPath.length)
  // console.log(path.length)
  // console.log(initPath.filter((item, index) => item === path[index]).length)
  // console.log(path.length)
  // console.log(initPath.length === path.length && initPath.filter((item, index) => item === path[index]).length === path.length)

  console.log(path.filter((item, index) => item === initPath[index]).length)
  console.log(path.length)

  // console.log(initPath.filter((item, index) => item === path[index]).length <= path.length)
}
