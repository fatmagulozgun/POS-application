import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import CardPage from './pages/CardPage'
import BillPage from './pages/BillPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CardPage />} />
      <Route path="/bills" element={<BillPage />} />

    </Routes>

  )
}

export default App
