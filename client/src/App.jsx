import './App.css'
import Categories from './components/categories/Categories.jsx'
import Header from './components/Header/Header.jsx'
import Products from './components/products/Products.jsx'
import CartTotals from './components/cart/CartTotals.jsx'
import './index.css'

function App() {

  return (
    <div>
      <Header />

      <div className='home px-6 flex justify-between gap-10'>
        <div className='categories overflow-auto max-h-[calc(100vh-_-112px)] pb-64 min-w-[145px]'>
          <Categories />
        </div>

        <div className='products flex-[8]'>
          <Products />
        </div>

        <div className='cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border'>
          <CartTotals />
        </div>
      </div>







    </div>
  )
}

export default App
