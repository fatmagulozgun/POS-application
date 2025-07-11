import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import CardPage from './pages/CardPage'
import BillPage from './pages/BillPage'
import CustomerPage from './pages/CustomerPage'
import StatisticPage from './pages/StatisticPage'



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CardPage />} />
      <Route path="/bills" element={<BillPage />} />
      <Route path="/customers" element={<CustomerPage />} />
      <Route path="/statistic" element={<StatisticPage />} />
    </Routes>

  )
}

export default App
