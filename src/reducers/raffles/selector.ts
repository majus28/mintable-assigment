import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { IRaffle } from './index';
import type { State } from 'store';

const raffleState: any = (state: State) => state.raffles;

export const getRaffles = createDraftSafeSelector(
  raffleState,
  (state) => state.raffles
);

export const getActiveRaffle = createDraftSafeSelector(raffleState, (state) =>
  state.raffles.find((i: IRaffle) => i.id === state.active)
);
