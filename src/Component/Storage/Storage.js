function addToDb(id){
    const ShoppingCard={};
    localStorage.setItem("Shapping-card",JSON.stringify(ShoppingCard))
}

export {addToDb}