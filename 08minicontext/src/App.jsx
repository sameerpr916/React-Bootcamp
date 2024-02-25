import Usercontextprovider from './context/usercontextprovider'
import './App.css'
import Profile1 from './assets/components/profile1'

import Login from './assets/components/login'

function App() {
  

  return (
    <Usercontextprovider>
     <h1>React with Chai</h1> 
     <Login />
     <Profile1 />
    </Usercontextprovider>
  )
}

export default App
