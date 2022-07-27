import {authorsCalibration} from './utility'

describe(
  "AuthorsCalibration testing",
  () => {
    const testCases = [
      {
        input: ['Ivanov Ivan', 'Vasiliev Vasily', 'Petrov Peter', 'Kirillov Kirill', 'Sonita Sarker', 'Esha Niyogi De'],
        expected: 'Ivanov Ivan, Vasiliev Vasily and others'
      },
      {
        input: ['Ivanov Ivan', 'Vasiliev Vasily'],
        expected: 'Ivanov Ivan, Vasiliev Vasily'
      },
      {
        input: ['Ivanov Ivan'],
        expected: 'Ivanov Ivan'
      },
      {
        input: 'Ivanov Ivan',
        expected: 'Ivanov Ivan'
      },
      {
        input: null,
        expected: 'Author not specified'
      },
      {
        input: undefined,
        expected: 'Author not specified'
      },
      {
        input: [],
        expected: 'Author not specified'
      },
    ]
    testCases.forEach(test => {
      it (
        `Input: ${test.input} Output: ${test.expected}`,
        () => {
          expect(authorsCalibration(test.input)).toBe(test.expected)
        }
      )
    })
  }
  )

