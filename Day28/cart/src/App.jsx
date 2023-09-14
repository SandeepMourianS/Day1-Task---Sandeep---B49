import React from 'react'
import Carts from './Carts'
import { ContextProvider } from './Context'

function App() {

  return (
    <>
    <ContextProvider>
      <h1> Your cart items </h1>
      <Carts/>
    </ContextProvider>
    </>
  )
}

export default App
