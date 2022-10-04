import useCart from '../../Hooks/useCart'
import useProduct from '../../Hooks/useProduct'
import { addToDb } from '../../utilities/fakedb'
import Cart from './Cart/Cart'
import Product from './Product/Product'
import {Link} from 'react-router-dom'

function Shop() {
    const [Productt,setProductt]=useProduct()
    const [cart,setcart]=useCart()
    const totalitems=(Proitems)=>{
        let newCart=[]
        const exsis=cart.find(carp=>carp.id===Proitems.id)
        if(!exsis){
            Proitems.quantiy=1;
            newCart=[...cart,Proitems]
        }else{
            const rest=cart.filter(Pro=>Pro.id !== Proitems.id);
            exsis.quantiy=exsis.quantiy+1
            newCart=[...rest,exsis]
        }
        setcart(newCart)
        addToDb(Proitems.id)
    }
    return (
        <div className='container mx-auto flex mt-5'>
           <div className='w-[1200px] flex flex-wrap gap-2'>
            {Productt.map(Prodata=><Product key={Prodata.id} Products={Prodata} Handleitem={totalitems}></Product>)}
           </div>
           <div className='w-[300px] bg-[#7b2cbf] p-2 text-white'>
            <Cart cart={cart}>
            <Link to="/ordereview"><button className='bg-[#197278] w-full rounded-md py-2 text-white'>Order Review</button></Link>
            </Cart>
           </div>
        </div>
    )
}

export default Shop
