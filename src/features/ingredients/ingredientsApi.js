import { api } from "../../app/services/api";

export const ingredientsApi = api.injectEndpoints({ //расcшерение базгово api
    endpoints: build => ({
        getIngredients:build.query({
            query:()=>{return "/ingredients"}
        }),//все виды запросов return http://localhost:// addOrder:
    })
})

export const {
    useGetIngredientsQuery
} = ingredientsApi