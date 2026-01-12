import { NavLink } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <img src="/logo%20supinfo.png" alt="Supinfo logo" />
        <div className="title">Supinfo Dashboard</div>
      </div>

      <nav style={{ flex: 1 }}>
        <ul className="header">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/fidelity" className={({ isActive }) => (isActive ? 'active' : '')}>
              Fidélité
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
              Produits
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : '')}>
              Utilisateurs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

    