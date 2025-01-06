import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BoardType} from '@/models/BoardType.ts';
import data from '@/data.ts';
import {findBoardById, findPostitById} from "@/lib/utils.ts";

export interface AppState {
    boards: BoardType[],
    currentBoard: BoardType,
}

const initialState: AppState = {
    boards: data,
    currentBoard: data[0],
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addBoard: (state, action: PayloadAction<BoardType>) => {
            state.boards.push(action.payload);
        },
        setPostitVisibility: (state, action) => {
            const board = findBoardById(state.boards, action.payload.board);
            if (board) {
                const postit = findPostitById(board.postits, action.payload.postit);
                const updatedPostit = {
                    ...postit,
                    visible: !postit.visible,
                };
                board.postits = board.postits.map((p) =>
                    p.id === updatedPostit.id ? updatedPostit : p
                );
            }
        },
    }
});

export const {addBoard, setPostitVisibility} = appSlice.actions;

export default appSlice.reducer;