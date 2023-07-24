function assertEquals(expect, actual) {
  if (typeof expect !== typeof actual)
    throw new Error(
      `the type of expect '${typeof expect}' is different from the type of actual '${typeof actual}'`
    )

  const primativeType =
    typeof expect === 'object' && Array.isArray(expect)
      ? 'array'
      : typeof expect

  switch (primativeType) {
    case 'string':
      compareString(expect, actual)
      break
    case 'number':
      compareNumber(expect, actual)
      break
    case 'array':
      compareArray(expect, actual)
      break
    default:
      compareOtherPrimativeTypes(expect, actual)
  }
}

const compareString = (expect, actual) => {
  if (actual !== expect)
    throw new Error(`Expected string ${expect}, got ${actual}`)
}

const compareNumber = (expect, actual) => {
  if (actual !== expect)
    throw new Error(`Expected number ${expect}, got ${actual}`)
}

const compareArray = (expect, actual) => {
  for (i = 0; i < expect.length; i++) {
    if (expect[i] !== actual[i]) {
      throw new Error(
        `Expected array value ${expect}, got ${actual}, error at index ${i}`
      )
    }
  }
}

const compareOtherPrimativeTypes = (expect, actual) => {
  throw new Error(
    `The primative type ${typeof expect} used in not supported by this test`
  )
}

module.exports = assertEquals
