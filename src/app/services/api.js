import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// создать файл ....Api.js  папака стор
export const api = createApi({
    reducerPath: 'api', // аналог названия
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3035/',
        prepareHeaders: (headers, { getState }) => {
            console.log(getState());
            const token = (getState()).authDate.token; // достаем токен
            if (token) {
                headers.set('authorization', token) //ken) // вставим заголовки
            }
            console.log('headers', headers)
            return headers
        },

    }),
    endpoints: builder => ({})
})