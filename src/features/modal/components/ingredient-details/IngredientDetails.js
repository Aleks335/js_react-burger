import React from 'react';
import styles from "./IngredientDetails.module.css";
import closeButton from "../../../../utils/images/CloseButton.svg";
import {useDispatch, useSelector} from "react-redux";
import {closePopupIngredient} from "../../modalSlice";

const IngredientDetails = (props) => {
    const dispatch = useDispatch();
    const popupIngredientObj = useSelector((state)=>{return state.modal.popupIngredientObj})

    return(
        <div className={styles.container}>
            <img src={closeButton} alt={"Close"} className={styles.close} onClick={(()=>
                    dispatch(closePopupIngredient())
            )}/>
                <p className={styles.deteil}>Детали ингредиента</p>
                <img className={styles.img} src={popupIngredientObj.image}/>

                <div className={styles.wrap}>
                    <div className={styles.p}>
                        <p>Калории,ккал</p>
                        <p>{popupIngredientObj.calories}</p>
                    </div>
                    <div  className={styles.p}>
                        <p>Белки, г</p>
                        <p>{popupIngredientObj.proteins}</p>
                    </div>
                    <div className={styles.p}>
                        <p>Жиры, г</p>
                        <p>{popupIngredientObj.fat}</p>
                    </div>
                    <div className={styles.p}>
                        <p>Углеводы, г</p>
                        <p>{popupIngredientObj.carbohydrates}</p>
                    </div>
                </div>
            </div>
    )
}

export default IngredientDetails;