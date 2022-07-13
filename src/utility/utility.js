export function authorsCalibration(arr) {
  switch (arr.length) {
    case 0:
      return 'author not specified'
    case 1:
      return arr.join('')
    case 2:
      return arr.join(', ')
    default:
      return `${arr[0]}, ${arr[1]} and others`
  }
}

export function cropTitle(title) {
  const words = title.split(' ')

 if(words.length > 10) {
   return words.filter(( _, i) => i < 7).join(' ') + '...'
 } else {
   return title
 }
}

export function cropYear(date) {
  if (typeof date === 'string'){
    return date.split('').filter((_, i) => i < 4).join('')
  } else {
    return date
  }
}

console.log(cropYear('2022-17-08'))
