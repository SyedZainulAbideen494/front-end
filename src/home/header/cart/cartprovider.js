import { useReducer } from "react";
import Cartcontext from "./cartcontext";

const defaultcartstate = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateitem = state.items.concat(action.item);
    const updatetotalamount =
      state.totalamount + action.item.price * action.item.amount;
    const existingItemsindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingcartitem = state.items[existingItemsindex];
    let updateditems;

    if (existingcartitem) {
      const updateditem = {
        ...existingcartitem,
        amount: existingcartitem.amount + action.item.amount,
      };
      updateditems = [...state.items];
      updateditems[existingItemsindex] = updateditem;
    } else {
      updateditems = state.items.concat(action.item);
    }

    return {
      items: updateditems,
      totalamount: updatetotalamount,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemsindex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingitem = state.items[existingItemsindex];
    const updatedtotalamount = state.totalamount - existingitem.price;
    let updateditems;
    if (existingitem.amount === 1) {
      updateditems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateditem = { ...existingitem, amount: existingitem.amount - 1 };
      updateditems = [...state.items];
      updateditems[existingItemsindex] = updateditem;
    }

    return {
      items: updateditems,
      totalamount: updatedtotalamount,
    };
  }
  return defaultcartstate;
};

const Cartprovider = (props) => {
  const [cartstate, dispatchcartaction] = useReducer(
    cartReducer,
    defaultcartstate
  );

  const additemhandler = (item) => {
    dispatchcartaction({ type: "ADD", item: item });
  };
  const removeitemhandler = (id) => {
    dispatchcartaction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartstate.items,
    totalamount: cartstate.totalamount,
    additem: additemhandler,
    removeitem: removeitemhandler,
  };
  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default Cartprovider;
