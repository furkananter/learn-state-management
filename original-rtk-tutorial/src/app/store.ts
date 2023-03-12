import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/dogs/dogsApiSlice';

// store oluşturuyoruz, reducer'ları ve middleware'leri ekliyoruz
// configureStore fonksiyonu, reduxjs/toolkit paketinden alınır
// configureStore: bir redux store oluşturur
// içerisinde reducer'lar ve middleware'ler bulunur
// reducer'lar: store'daki state'i değiştirmek için kullanılır
// middleware'ler: store'a action'ları göndermeden önce işlem yapmak için kullanılır. Adı üstünde araya girip işlem yaparlar.
// counter adında bir reducer oluşturduk. counterReducer'ı kullanarak state'i değiştireceğiz.
// apiSlice.reducerPath: apiSlice reducer'ının path'ini alıyoruz


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
