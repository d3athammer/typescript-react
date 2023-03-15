import * as React from 'react'
import { ChakraButton } from './components/ChakraButton'
import Button from './components/Button/Button'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from './components/Like/Like';

function App() {
  const handleClick = () => {
    console.log("clicked");
  }

  const handleLike = () => {
    console.log("Clicked")
  }
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div className="container m-5">
      <ChakraButton />
      </div>
      <div className="container m-5">
      <Button onClick={handleClick}>Click Me</Button>
      </div>
      <div>
        <Like onClick={handleLike}/>
      </div>
    </ChakraProvider>
  )
}

export default App
