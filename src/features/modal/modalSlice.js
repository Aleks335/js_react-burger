import {createSlice} from "@reduxjs/toolkit";

// файл для модальных окане modalSlice
// идея модальное окно одно сожержимо разное

const modalSlice = createSlice({
    // как выглядит срез
    name:'modal',// название
    initialState:{
        popupOrder: false,
        popupIngredient: false,
        popupIngredientObj : null, // для содержмиго внутренносит popap
        popupOrderDetails:false,
        popupOrderDetailsObj : null,

    }, // как выглядит изначально
    reducers:{// кка может меняться
        openPopupOrder(state, action){
            state.popupOrder=true
        },
        openPopupIngredient(state, action){
            state.popupIngredient=true
            state.popupIngredientObj = action.payload
        },
        openPopupOrderDetails(state, action){
            state.popupOrderDetails=true
            state.popupOrderDetailsObj = action.payload
        },

        closePopupOrderDetails(state, action){
            state.popupOrderDetails=false
        },

        closePopupOrder(state, action){
            state.popupOrder=false
        },
        closePopupIngredient(state, action){
            state.popupIngredient=false
        },

    } //как сожет меняться
})

export const {openPopupOrder, closePopupIngredient, closePopupOrder, openPopupIngredient, closePopupAll, openPopupOrderDetails,  closePopupOrderDetails} = modalSlice.actions
export default modalSlice.reducer