import React from 'react';
import BurgerIngredients from "../features/ingredients/components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../features/ingredients/components/burger-constructor/BurgerConstructor";
import OverlayDetails from "../features/modal/components/overlay-details/OverlayDetails";
import OrderDetails from "../features/modal/components/order-details/OrderDetails";
import IngredientDetails from "../features/modal/components/ingredient-details/IngredientDetails";
import {useSelector} from "react-redux";
import style from './Page.module.css';
import OrderDetailsInfo from "../features/modal/components/order-details-info/OrderDetailsInfo";


function ConstructorPage(props) {

    const popupOrder = useSelector((state)=>{return state.modal.popupOrder})
    const popupIngredient = useSelector((state)=>{return state.modal.popupIngredient})
    const selectedIngredients = useSelector((state)=>{return state.selectedIngredients})

    return (
        <main className={style.main}>
            <BurgerIngredients></BurgerIngredients>
            <BurgerConstructor
                butt={((selectedIngredients.main.length > 0) || (selectedIngredients.bun.length > 0))}>
            </BurgerConstructor>
            {popupOrder && <OverlayDetails><OrderDetails></OrderDetails></OverlayDetails>}
            {popupIngredient && <OverlayDetails><IngredientDetails></IngredientDetails></OverlayDetails>}

        </main>
    );
}

export default ConstructorPage;