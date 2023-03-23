

export function useCalculateOrderDate(isoDate) {
    const dateObj = new Date(isoDate);

    return {
        day : new Date().toJSON().slice(0,10) === dateObj.toJSON().slice(0,10) ? "сегодня" : dateObj.toJSON().slice(0,10),
        time: dateObj.toJSON().slice(11,19),
    }
}
