import React from 'react'
const NewTime = new Date().toLocaleTimeString()
const NewDate = new Date().toLocaleDateString()
const App = () => {
  return (
    <>
      <h1>Hello Kharvi's</h1>
      <p>Todays time is : {NewTime}</p>
      <p>Todays Date is : {NewDate}</p>
    </>
  )
}

export default App
