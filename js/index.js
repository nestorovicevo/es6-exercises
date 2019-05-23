import { add } from './test-exercise/utils'
import { feed } from './destructuring'
import { testLogicalExpressions } from './logical-expressions'
import { testArrayFunctions } from './array-functions'

console.log(add(3, 4))

feed({
  name: 'Rex',
  meal: 'fish',
  diet: 'chrono'
})

testLogicalExpressions()

testArrayFunctions()
