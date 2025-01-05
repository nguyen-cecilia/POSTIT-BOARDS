import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Board} from '@/models/Board.ts';
import data from '@/data.ts';

export interface AppState {
    boards: Board[],
    currentBoard: Board,
}

const initialState: AppState = {
    boards: data,
    currentBoard: data[0],
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addBoard: (state, action: PayloadAction<Board>) => {
            state.boards.push(action.payload);
        }
    }
})

export const {addBoard} = appSlice.actions;

export default appSlice.reducer;