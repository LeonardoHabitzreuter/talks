import React, { createContext, useContext } from 'react'

const Context = createContext({ name: null, age: null })

const ContextProvider = ({ children }) => (
  <Context.Provider value={{ name: 'Jhon', age: 35 }}>
    {children}
  </Context.Provider>
))

const Child = () => {
  const { name, age } = useContext(Context)

  return <h1>{name + age}</h1>
}

const Parent = () => (
  <ContextProvider>
    <Child />
  </ContextProvider>
)
