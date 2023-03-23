import { api } from "../../app/services/api.js";

export const ordersApi = api.injectEndpoints({ //расcшерение базгово api
    endpoints: build => ({
        addOrder:build.mutation({query:(body)=>({
                url: "/order ",
                method : "POST",
                body: {...body, date: new Date().toISOString()} //toISOString это универсальный формат для записи даты в виде строки
            })
            // , invalidatesTags:['Product']
        }),// понимание в какой момент изменить в следсвии чего заново отбразить
        getOrder:build.query({
            query:()=>{return "orders"}
        }),
    })
})

export const {
    useAddOrderMutation, useGetOrderQuery
} = ordersApi