
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <NavLink>Home</NavLink>
        </div>
        <nav>
            <NavLink>Home</NavLink>
            <NavLink>Favorite</NavLink>
        </nav>
    </header>
  )
}
