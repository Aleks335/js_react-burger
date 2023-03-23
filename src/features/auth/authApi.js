import { api } from "../../app/services/api.js";

export const authApi = api.injectEndpoints({ //расcшерение базгово api
    endpoints: build => ({
        addUser:build.mutation({query:(body)=>({
                url: "/signup ",
                method : "POST",
                body: body  //toISOString это универсальный формат для записи даты в виде строки
            })
            , invalidatesTags:['Product']
        }),
        loginUser:build.mutation({query:(body)=>({
                url: "/signin",
                method : "POST",
                body: body //toISOString это универсальный формат для записи даты в виде строки
            })
            , invalidatesTags:['Product']
        })
    })
})

export const {useAddUserMutation, useLoginUserMutation} = authApi