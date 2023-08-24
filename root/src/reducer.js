//Here we define all the application level states and define actions to make changes to state

export const initialState={
    basket:[],
}
//Selector


export const getBasketTotal=(basket)=>{
    return(basket?.reduce((amount,item)=>item.price+amount,0));
}


const reducer=(state,action)=>
{
    switch(action.type){
        case"ADD_TO_BASKET":
        return{
            ...state,
            basket:[...state.basket,action.item],
        }
    }
}

export default reducer;