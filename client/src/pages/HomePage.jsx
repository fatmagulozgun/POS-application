import React from 'react'
import Categories from '../components/categories/Categories.jsx'
import Header from '../components/header/Header.jsx'
import Products from '../components/products/Products.jsx'
import CartTotals from '../components/cart/CartTotals.jsx'
const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className='home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-24'>
                <div className='categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10 '>
                    <Categories />
                </div>

                <div className='products flex-[8] max-h-[calc(100vh_-_112px)] overflow-auto pb-10'>
                    <Products />
                </div>

                <div className='cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border '>
                    <CartTotals />
                </div>
            </div>
        </div>
    )
}

export default HomePage