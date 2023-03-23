import {useCalculateOrderDate} from "./useCalculateOrderDate";

export function useCalculateDetailsInfo(order = []) {
    const allMass = order.bun.concat(order.main)
    const uniqueMass = allMass.filter((item,index)=>!allMass.slice(index+1).find((subItem)=>item._id===subItem._id))

    const countOfUniqueIngredients = uniqueMass.map((ii)=> ({
        ing:ii,
        count:allMass.filter((aa) => aa._id === ii._id).length
        }))

    const {day, time}=useCalculateOrderDate(order.date)

    return {
        day : day,
        time: time,
        name: order.id,
        suma: order.sumaPrice,
        countOfUniqueIngredients: countOfUniqueIngredients
    }
}
