import React, { Component } from 'react'
import { Button } from '@chakra-ui/react'

export function ChakraButton() {

  const handleClick = () => {
    console.log("hi")
  }

  return(
    <Button colorScheme='blue' onClick={handleClick}> Click Me</Button>
  )
}
