import {createSlice} from "@reduxjs/toolkit";

const selectedIngredientsSlice = createSlice({
    // как выглядит срез
    name:'modal',// название
    initialState:{
        bun: [],
        main: [],
        sumaPrice:0,
    }, // как выглядит изначально
    reducers:{// кка может меняться
        addSelectedIngredient(state, action){
            if ((state.bun.length === 1) && (state.bun[0]._id !== action.payload._id)){return}
            if(action.payload.type === 'bun' && state.bun.length < 2 ) {
                state.bun.push(action.payload)
                state.sumaPrice += action.payload.price
            }
            if(action.payload.type !== 'bun'){
                state.main.push(action.payload)
                state.sumaPrice += action.payload.price
               }
        },

        deleteSelectedIngredient(state, action){
            const deletedPrice =  state.main[action.payload].price
            state.main.splice(action.payload, 1);
            state.sumaPrice -= deletedPrice
        },
        } //как сожет меняться
})

export const {addSelectedIngredient, deleteSelectedIngredient} = selectedIngredientsSlice.actions
export default selectedIngredientsSlice.reducer