export const initalState = {
  cart: [],
  cart_total_sum: 0,
  user: null,
};

//Selector

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_ITEM_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product`);
      }
      return {
        ...state,
        cart: newCart,
      };
    case "LOG_USER":
      console.log(action.user)
      return {
        ...state,
        user: action.user,
      };
      default:
        return state;
      }
    };
    console.log(initalState.user)

export default reducer;
