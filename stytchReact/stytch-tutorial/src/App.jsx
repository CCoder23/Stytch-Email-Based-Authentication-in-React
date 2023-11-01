import { useCallback } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./views/Home"
import Login from "./views/Login"
import Account from "./views/Account"
import Authenticate from "./views/Authenticate"
import PrivateRoute from "./layouts/PrivateRoute"
import { useStytch } from "@stytch/stytch-react"


function App() {

  const client= useStytch()

  const navigate = useNavigate()

  const handleLogin = async(email) =>{    
    await client.magicLinks.email.loginOrCreate(email)
    alert(`email has been sent to ${email}`)
  }

  const handleLogout = useCallback(async()=>{
    await client.session.revoke();
    alert("logged out!")
    navigate(0);
  },[client])
  
  return (
    <>
    <Navigation handleLogout={handleLogout} />

    <Routes>
      <Route index path='/' element={<Home/>} />
      <Route index path='/login' element={<Login handleLogin= {handleLogin} />} />
      <Route index path='/account' element={
        <PrivateRoute>
          <Account />
        </PrivateRoute>
        } />
      <Route index path='/authenticate' element={<Authenticate/>} />
      <Route index path='*' element={<p>404 page not found !</p>} />
    </Routes>
    </>
  )
}

export default App
