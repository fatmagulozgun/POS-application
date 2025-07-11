import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, LogoutOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons'
import { Input, Badge } from 'antd'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className='border-b mb-6'>
      <header className='py-4 px-6 flex justify-between items-center gap-10'>

        <div className="logo">
          <a href="/">
            <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
          </a>
        </div>


        <div className="header-search flex-1 max-w-[800px]">
          <Input className='rounded-full' size="large" placeholder="Ürün Ara..." prefix={<SearchOutlined />} />
        </div>


        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen bg-white md:bg-transparent left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link to={'/'} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
            <HomeOutlined className='md:text-2xl text-xl' />
            <span className='md:text-xs text-[10px] '>Anasayfa</span>
          </Link>
          <Badge count={5} offset={[0, 6]}>
            <Link to={'/cart'} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
              <ShoppingCartOutlined className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>Sepet</span>
            </Link>
          </Badge>
          <Link to={'/bills'} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
            <CopyOutlined className='md:text-2xl text-xl' />
            <span className='md:text-xs text-[10px] '>Faturalar</span>
          </Link>

          <Link to={'/customers'} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
            <UserOutlined className='md:text-2xl text-xl' />
            <span className='md:text-xs text-[10px]'>Müşteriler</span>
          </Link>

          <Link to={'/statistic'} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
            <BarChartOutlined className='md:text-2xl text-xl' />
            <span className='md:text-xs text-[10px]'>İstatistikler</span>
          </Link>

          <Link to={'/'} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
            <LogoutOutlined className='md:text-2xl text-xl' />
            <span className='md:text-xs text-[10px]'>Çıkış</span>
          </Link>
        </div>

      </header>
    </div>
  )
}

export default Header