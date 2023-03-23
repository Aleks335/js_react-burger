import {createSlice} from "@reduxjs/toolkit";

import {authApi} from "./authApi";

// создать файл numSlice.js

const authSlice = createSlice({
    // как выглядит срез
    name:'authSlice',// название
    initialState:{
        isAuth:false,
        token:'', // сохранить
    }, // как выглядит изначально
    reducers:{// кка может меняться
        addOne(state, action){
            state.num ++
        },
    }, //как сожет меняться

    extraReducers:((builder)=>{
        // для регестрации
        builder.addMatcher(
            authApi.endpoints.addUser.matchFulfilled,// следим имеено за addUser получаем токен для авторизации
            (state, action) => {
                state.token = action.payload.token; // получили токе через action.payload
                state.isAuth = true;

                console.log('state.token',state.token)
                console.log('extra');
                // console.log(state);
                console.log(action.payload);
            }
        );
            builder.addMatcher(
                authApi.endpoints.loginUser.matchFulfilled,// следим имеено за addUser получаем токен для авторизации
                (state, action) => {
                    state.token = action.payload.token; // получили токе через action.payload
                    state.isAuth = true;

                    console.log('state.token',state.token)
                    console.log('extra');
                    // console.log(state);
                    console.log(action.payload);
                }
            );
    })
})

export const {addOne} = authSlice.actions
export default authSlice.reducer