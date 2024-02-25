import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function myApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// }
const anotherElement = (
  <a href= "https://google.com" target= '_blank'> visit google</a>

)
const anotheruser = "chai aur react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 reactElement
)
