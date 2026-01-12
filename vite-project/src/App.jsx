import './App.css'
import { Header } from './header.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Fidelity from './pages/Fidelity'
import Users from './pages/Users'
import Products from './pages/Products'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fidelity" element={<Fidelity />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes> 
      </main>
    </>
  )
}

export default App
