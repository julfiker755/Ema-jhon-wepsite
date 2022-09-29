import React, { useEffect, useState } from 'react';
import { addToDb, getstroageitem } from '../../utilities/fakedb';
import Order from './Order/Order';
import Product from './Product/Product';

const Shop = () => {
    const [Productt,setproduct]=useState([]);
    const [cart,setcart]=useState([]);
    useEffect(()=>{
        fetch("./Products.JSON")
        .then(res=>res.json())
        .then(data=>setproduct(data))
    },[])
    // new item cart add
    function handleclick(Product){
        let newcart=[];
        const exsis=cart.find(Product=>Product.id===Product.id)
        if(!exsis){
            Product.quantity=1;
            newcart=[...cart,Product]
        }else{
            const rest=cart.filter(Product=>Product.id !== Product.id);
            exsis.quantity=exsis.quantity+1;
            newcart=[...rest,exsis];
        }
        
        setcart(newcart)
        addToDb(Product.id)
    }
    // save stroage
    useEffect(()=>{
        const stroage=getstroageitem();
        const savecart=[];
        for(const id in stroage){
         const addproduct=Productt.find(Prod=>Prod.id===id)
         if(addproduct){
            const quantity=stroage[id]
            addproduct.quantity=quantity
            savecart.push(addproduct)
         }
        }
        setcart(savecart)
    },[Productt])
    return (
        <div className='container mx-auto flex'>
           <div className='w-[1200px] flex flex-wrap  m-2 gap-3'>
           {Productt.map(Pro=><Product key={Pro.id} Product={Pro} Handleclick={handleclick}></Product>)}
           </div>
           <div className='w-[350px]  m-2 bg-slate-600 text-white'>
               <Order cart={cart}></Order>
           </div>
        </div>
    );
};

export default Shop;