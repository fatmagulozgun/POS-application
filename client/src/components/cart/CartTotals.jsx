import { Button } from 'antd'
import React from 'react'
import { ClearOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"

const CartTotals = () => {
    return (
        <div className='cart h-full max-h-[calc(100vh_-_90px)] flex flex-col'>
            <h2 className='bg-blue-600 text-center py-4 text-white font-bold tracking-wide '>
                Sepetteki Ürünler
            </h2>

            <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto ">
                <li className="cart-item flex justify-between">
                    <div className='flex items-center'>
                        <img src="https://www.doktorsaliheken.com/2021/03/elma.jpg" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Elma</b>
                            <span>12t x2</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} type='primary' size='small' />
                        <span className=''>1</span>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} type='primary' size='small' />
                    </div>
                </li>

                <li className="cart-item flex justify-between ">
                    <div className='flex items-center'>
                        <img src="https://www.doktorsaliheken.com/2021/03/elma.jpg" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Elma</b>
                            <span>12t x2</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} type='primary' size='small' />
                        <span className=''>1</span>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} type='primary' size='small' />
                    </div>
                </li>


                <li className="cart-item flex justify-between">
                    <div className='flex items-center'>
                        <img src="https://www.doktorsaliheken.com/2021/03/elma.jpg" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Elma</b>
                            <span>12t x2</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} type='primary' size='small' />
                        <span className=''>1</span>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} type='primary' size='small' />
                    </div>
                </li>

                <li className="cart-item flex justify-between">
                    <div className='flex items-center'>
                        <img src="https://www.doktorsaliheken.com/2021/03/elma.jpg" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Elma</b>
                            <span>12t x2</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} type='primary' size='small' />
                        <span className=''>1</span>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} type='primary' size='small' />
                    </div>
                </li>

                <li className="cart-item flex justify-between">
                    <div className='flex items-center'>
                        <img src="https://www.doktorsaliheken.com/2021/03/elma.jpg" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Elma</b>
                            <span>12t x2</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} type='primary' size='small' />
                        <span className=''>1</span>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} type='primary' size='small' />
                    </div>
                </li>

                <li className="cart-item flex justify-between">
                    <div className='flex items-center'>
                        <img src="https://www.doktorsaliheken.com/2021/03/elma.jpg" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Elma</b>
                            <span>12t x2</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<PlusCircleOutlined />} type='primary' size='small' />
                        <span className=''>1</span>
                        <Button className='w-full  flex items-center justify-center !rounded-full' icon={<MinusCircleOutlined />} type='primary' size='small' />
                    </div>
                </li>

            </ul>

            <div className="cart-totals mt-auto">
                <div className='border-t border-b'></div>
                <div className='flex justify-between p-2'>
                    <b>Ara Toplam</b>
                    <span>99tl</span>
                </div>

                <div className='flex justify-between p-2'>
                    <b>KDV %8</b>
                    <span className='text-red-700' >+7.92tl</span>
                </div>
            </div>


            <div className='border-b mt-4'></div>
            <div className='flex justify-between p-2'>
                <b className='text-xl text-green-500'>Genel Toplam</b>
                <span className='text-xl'>99tl</span>
            </div>



            <div className='py-4 px-2'>
                <Button className='w-full' type='primary' size='large'>Sipariş Oluştur</Button>

                <Button className='w-full mt-2 flex items-center justify-center' icon={<ClearOutlined />} danger type='primary' size='large'>Temizle</Button>
            </div>
        </div>

    )
}

export default CartTotals