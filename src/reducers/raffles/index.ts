import { createSlice } from '@reduxjs/toolkit';
import type { Slice } from '@reduxjs/toolkit';

export interface IRaffle {
  id: string;
  name: string;
  image: string;
  obtained?: number;
}

export interface RaffleState {
  raffles: IRaffle[];
  active: String;
}

const initialState: RaffleState = {
  raffles: [],
  active: '',
};

export const raffleSlice: Slice<RaffleState> = createSlice({
  name: 'raffles',
  initialState,
  reducers: {
    getRaffles: (state, action) => {
      return {
        ...state,
        raffles: action.payload,
      };
    },
    setActiveId: (state, action) => {
      console.log(action, 'action');
      return {
        ...state,
        active: action.payload,
      };
    },
  },
});

export const { getRaffles, setActiveId } = raffleSlice.actions;
export default raffleSlice.reducer;
