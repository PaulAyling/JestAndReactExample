import React from 'react'
import { addNumbers } from './addNumbers'




it('addNumbers: Addition Correct', () =>{
  const result = addNumbers(3,2)
  expect(result).toBe(5)
})

