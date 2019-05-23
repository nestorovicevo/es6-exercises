export function feed (animal) {
  const { name, meal, diet } = animal

  console.log(`Feed ${name} with ${meal} on ${diet} diet.`)
}

const test = {
  name: 'name',
  index: 1
}

const { name: novi = 'default' } = test
const { nameD: noviD = 'default' } = test

console.log(novi)
console.log(noviD)
