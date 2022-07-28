import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

// Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// reducer
// const CartReducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default CartReducer;

const productSlice = createSlice({
  name: 'CounterTest',
  initialState,
  reducers: {
    getIncrease(state, action) {
      state.count = state.count + 1;
    },
    getDecrease(state, action) {
      state.count = state.count - 1;
    },
  },
});

// console.log('ppp', productSlice);

export const produncActions = productSlice.actions;
export default productSlice.reducer;
// reducers들이 합쳐서 마지막에는 결국 하나의 큰 Reducer 이기 때문에 s가 붙지 않음.
