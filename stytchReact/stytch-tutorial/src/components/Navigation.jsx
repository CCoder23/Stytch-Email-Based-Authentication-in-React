import { NavLink } from 'react-router-dom'
import { useStytchSession } from '@stytch/stytch-react'

export default function Navigation({handleLogout}) {
    const session= useStytchSession();
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {!session && <NavLink to="/account">Account</NavLink>}
            {session && <NavLink to="/login">Login</NavLink>}
             { session && <button onClick={handleLogout}>Logout</button>}
        </nav>
    )
}
