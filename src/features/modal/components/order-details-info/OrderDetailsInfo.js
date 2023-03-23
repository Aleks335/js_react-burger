import React from 'react';
import styles from "../order-details/OrderDetails.module.css";
import styOrder from "./OrderDetailsInfo.module.css";
import closeButton from "../../../../utils/images/CloseButton.svg";
import {closePopupOrder, closePopupOrderDetails} from "../../modalSlice";
import doneButton from "../../../../utils/images/DoneButton.png";
import {useDispatch, useSelector} from "react-redux";
import {useCalculateDetailsInfo} from "../../../../utils/hooks/useCalculateDetailsInfo";


////khgf
function OrderDetailsInfo(props) {
    const dispatch = useDispatch();
    const massItem = useSelector((state)=>{return state.modal.popupOrderDetailsObj });
    const {countOfUniqueIngredients, suma, day, name, time}=useCalculateDetailsInfo(massItem);
    console.log('countOfUniqueIngredients', countOfUniqueIngredients)


    return (
        <div className={styles.container}>
            <img src={closeButton} alt={"Close"} className={styles.close} onClick={(()=>
                    dispatch(closePopupOrderDetails())
            )}/>
            <div className={styOrder.deteilsInfo}>
                <h1 className={`text text_type_digits-large ${styles.amount}`}>{name}</h1>
                <p className="text text_type_main-medium mt-8">Состав:</p>
                <div className={styOrder.components}>
                    {countOfUniqueIngredients.map((item)=><p className={styOrder.component}>{item.ing.name}  {item.count}</p>)}
                </div>
                <div className={styOrder.info}>
                    <p>{day} {time}</p>
                    <p>{suma}</p>
                </div>

            </div>
        </div>
    );
}

export default OrderDetailsInfo;