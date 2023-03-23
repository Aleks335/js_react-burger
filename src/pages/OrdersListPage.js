import React from 'react';
import style from './Page.module.css';
import styleOrders from '../features/ingredients/components/burger-ingredients/BurgerIngredients.module.css';
import styleInfo from './OrdersListPage.module.css';
import {useGetOrderQuery} from "../features/orders/ordersApi";
import Order from "../features/orders/components/order-list/Order";
import {useCalculateOrdersInfo} from "../utils/hooks/useCalculateOrdersInfo";
import OverlayDetails from "../features/modal/components/overlay-details/OverlayDetails";
import OrderDetailsInfo from "../features/modal/components/order-details-info/OrderDetailsInfo";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


// Лента заказов
function OrdersListPage(props) {

    const {data={}, isLoading} = useGetOrderQuery()
    const {allOrdersCount, todayOrdersCount}= useCalculateOrdersInfo(data.orders)
    const popupOrderDetails = useSelector((state)=>{return state.modal.popupOrderDetails})
    const isAuth = useSelector((state)=>{return state.authDate.isAuth});

    console.log('data',data)
    return (
        <section className={style.main}>
            <div className={styleOrders.section}>
                <h1 className={`text text_type_main-large mt-10 mb-5`}>Лента заказов</h1>
                <div  className={styleOrders.ingredients}>
                    {!isLoading && data.orders.map((item)=> <Order item={item}></Order>)}
                </div>
            </div>

            <div className={styleInfo.infoContainer}>
                <div className={styleInfo.statusContainer}>
                    <p>Готовы</p>
                    <p>2</p>
                    <p>В работе</p>
                    <p>5</p>
                </div>
                <div>
                    <p>Выполнено за все время</p>
                    <p>{!isLoading && allOrdersCount}</p>
                </div>
                <div>
                    <p>Выполнено за сегодня:</p>
                    <p>{!isLoading && todayOrdersCount}</p>
                </div>

            </div>

            {
                popupOrderDetails && <OverlayDetails><OrderDetailsInfo></OrderDetailsInfo></OverlayDetails>
            }
        </section>
    );
}

export default OrdersListPage;