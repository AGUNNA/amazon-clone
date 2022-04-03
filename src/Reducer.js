export const initialState = {
    basket: [
        {
            id: "32545354545",
            title: "Sceptre Curved 27 Gaming Monitor up to 165Hz DisplayPort 144Hz HDMI Edge-Less AMD FreeSync Premium, Build-in Speakers Machine Black 2021",
            price: 326.00,
            rating: 4,
            image: "https://m.media-amazon.com/images/I/61PlJo8MUpL._AC_SL1375_.jpg",
        }
    ],
    user: null,
};

// this is a selecta code --  it calculates the total items in a cart and 
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0); 


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket];

            //we checked to see if the product exists 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn (
                    `Can't rmeove product (id: ${action.id}) as its not in basket!`
                ); 
            }
            
            //return the basket to it original state but return with the new items in the basket
            return { 
                ...state, 
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;