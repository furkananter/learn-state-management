// ducks pattern

// createSlice ve PayloadAction'u reduxjs/toolkit paketinden alıyoruz
// createSlice: bir reducer ve action'ı oluşturur
// PayloadAction: bir action'ın payload'ı için bir tip belirler
//

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
        },
        // decrement
        decremented(state) {
            state.value--
        },
        amountAdded: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})


export const { incremented, decremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer
