import React, { useEffect, useState } from 'react'
function useProduct(){
    const [Productt,setProductt]=useState([]);
    useEffect(()=>{
        fetch("./Products.json")
        .then(res=>res.json())
        .then(data=>setProductt(data))
    },[])
    return [Productt,setProductt]
}
export default useProduct;