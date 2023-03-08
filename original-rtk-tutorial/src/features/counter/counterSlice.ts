// ducks pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        incremented(state) {
            state.value++
        }
        // decrement


    }
})


export const { incremented } = counterSlice.actions
export default counterSlice.reducer
