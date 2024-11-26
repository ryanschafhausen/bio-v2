import React from 'react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)