import * as React from 'react'
import { ChakraButton } from './components/ChakraButton'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Form from './components/Form';


function App() {

  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div>
        <Form/>
      </div>
    </ChakraProvider>
  )
}

export default App
