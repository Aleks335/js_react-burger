import closeButton from '../../../../utils/images/CloseButton.svg'
import doneButton from '../../../../utils/images/DoneButton.png'
import styles from './OrderDetails.module.css'
import React from "react";
import {useDispatch} from "react-redux";
import {closePopupOrder} from "../../modalSlice";

const OrderDetails = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img src={closeButton} alt={"Close"} className={styles.close} onClick={(()=>
                    dispatch(closePopupOrder())
            )}/>
          <div>
              <h1 className={`text text_type_digits-large ${styles.amount}`}>034536</h1>
              <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
              <img src={doneButton} alt="Готово" className={styles.img}/>
              <p className="text text_type_main-small mt-15">Ваш заказ начали готовить</p>
              <p className="text text_type_main-small text_color_inactive mt-2 mb-30">
                  Дождитесь готовности на орбитальной станции</p>
          </div>
        </div>
    );
};

export default OrderDetails;