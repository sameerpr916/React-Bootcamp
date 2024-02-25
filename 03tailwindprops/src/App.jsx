import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

let myobj = {
  username : "sameer",
  age : 19
}
let newarray = [1, 2, 3]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card />
    <Card username = "chaiaurcode" />
    </>
  )
}

export default App
