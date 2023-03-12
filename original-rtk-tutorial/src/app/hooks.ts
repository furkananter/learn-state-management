import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// useAppDispatch ve useAppSelector hook'larını oluşturuyoruz.
// Bu hook'lar, store'daki state'i ve dispatch fonksiyonunu kullanmak için kullanılacak.
// useAppDispatch hook'u, dispatch fonksiyonunu kullanmak için kullanılacak.
// useAppSelector hook'u, store'daki state'i kullanmak için kullanılacak.


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
