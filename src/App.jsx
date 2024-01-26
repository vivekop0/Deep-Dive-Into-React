import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count+1)
  }
  function remove(){
    if(count>0)
  setCount(count-1)
  }


  return (
    <>
    <button onClick={add} >count is {count}</button>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button onClick={remove}>remove</button>
    
    </>
  )
}

export default App
