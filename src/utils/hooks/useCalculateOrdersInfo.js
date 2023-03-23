
export function useCalculateOrdersInfo(orders = []) {

    const date = new Date().toJSON().slice(0,10);
    const todayOrdersCount = orders.filter((item)=>new Date(item.date).toJSON().slice(0,10) === date).length

    return{
        todayOrdersCount:todayOrdersCount,
        allOrdersCount: orders.length
    }
}
