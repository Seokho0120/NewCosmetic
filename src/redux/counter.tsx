const INITIAL_STATE = { count: 0 };

// Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// reducer
const CartReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default CartReducer;
