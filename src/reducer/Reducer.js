
export const shoppingAppReducer = function(state,action){
    console.log(action.type)
    switch(action.type){
       
        case "ADD_TO_CART":{

            //console.log(action.payload.id)
            const chkCart= state.cart.find(c=>c.id==action.payload.id);

            //console.log(chkCart)

            if(!chkCart){
                console.log("there")
                const newCart=[...state.cart,{...action.payload,qty:1}];
                return {
                    ...state,
                    cart:newCart
                }
            }
            else{
                return {
                    ...state
                }
            }
            
        }
    
        case "ADD_QTY_ONE":{
            //console.log(state.cart)

            return {
             ...state,
             cart:state.cart.filter((c)=>c.id==action.payload.id ? (c.qty=action.payload.qty): c.qty)
             
            }
            
         }

         case "REMOVE_QTY_ONE":{
            const current_cart_product= state.cart.find(c=>c.id==action.payload.id);
            console.log(current_cart_product.qty);
            
            if(current_cart_product.qty>1){
                current_cart_product.qty= action.payload.qty
                console.log([...state.cart,current_cart_product])
                
            }
            
            return {
                ...state,
                cart:[...state.cart]
            }
            
         }

         case "REMOVE_CART_ITEM_ONE":{
            return {
                ...state,
                cart:[...state.cart.filter((c)=>c.id != action.payload.id)]
            }
         }

        default:
            return state;
    }
   
}