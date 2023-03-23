import {configureStore} from "@reduxjs/toolkit";
import modalSlice from '../features/modal/modalSlice'
import selectedIngredientsSlice from "../features/ingredients/selectedIngredientsSlice";
import {api} from "./services/api";
import authSlice from "../features/auth/authSlice";

export default configureStore({// глобальное хранилище из срезов
    // соединяем reducer - срез
    reducer:{
        modal:modalSlice,
        authDate:authSlice,
        selectedIngredients:selectedIngredientsSlice,
        [api.reducerPath]:api.reducer  //подключаем слайс
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(api.middleware) //
})
