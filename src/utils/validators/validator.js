export function requiredFields(value) {
  return value ? undefined : 'Field is must be required, bitch'
}

export function maxLengthCreator(maxLength) {
  return function (value) {
    return (value.length > maxLength) ? `Max length more ${maxLength} symbols` : undefined
  }
}