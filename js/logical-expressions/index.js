export function testLogicalExpressions () {
  const user1 = null
  const user2 = {
    id: 'test'
  }

  const test1 = user1 || 2
  const test2 = user2 && user2.id

  console.log(test1)
  console.log(test2)

  console.log('logical expressions 1')

  console.log(1 || false)
  console.log(0 || false)
  console.log(undefined || false)
  console.log(undefined || true)

  console.log('logical expressions 2')

  console.log(1 || true)
  console.log(1 && true)
  console.log(1 && false)
  console.log(null || false)
  console.log(null || true)
  console.log(!!{} || true)
  console.log(!!{} && true)
}
