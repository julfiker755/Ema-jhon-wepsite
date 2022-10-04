import React from 'react'
import useCart from '../../Hooks/useCart'
import Cart from '../Shop/Cart/Cart'
import ProductDel from '../OrderReview/ProductDel/ProductDel'
import { removeFromDb } from '../../utilities/fakedb'
function OrderReview() {
    const [cart,setcart]=useCart()
    const Removeitem=(Rproduct)=>{
     const rest=cart.filter(Proit=>Proit.id !== Rproduct.id)
     setcart(rest)
     removeFromDb(Rproduct.id)
    }
    return (
        <div className='container mx-auto flex mt-4'>
            <div className='w-[1200px]'>
                  {cart.map(Pro=> <ProductDel key={Pro.id} Prouctt={Pro} Handlermove={Removeitem}></ProductDel>)}
                </div>
            <div className='bg-[tomato] text-white w-[300px] p-1'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default OrderReview
