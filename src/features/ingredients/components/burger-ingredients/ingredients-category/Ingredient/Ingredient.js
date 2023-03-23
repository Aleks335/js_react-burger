import React from 'react';

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Ingredient.module.css'
import {useDispatch, useSelector} from "react-redux";
import {openPopupIngredient} from "../../../../../modal/modalSlice";
import {addSelectedIngredient} from "../../../../selectedIngredientsSlice";

function  Ingredient(props) {
    const {image, price, name, count} = props.item
    const dispatch = useDispatch();

    return (
        <div>
            <div className={style.info}>
                <p className={style.circle} onClick={(()=>{
                    dispatch(openPopupIngredient(props.item))
                })}>!</p>
                {count > 0 && <Counter count={count} extraClass={style.count}/>}
            </div>
            <div className={style.ingredient}
             onClick={(() => {
                 dispatch(addSelectedIngredient(props.item))

             })}>
                <img src={image} className={style.img}/>
                <div className={style.price}>
                    <span className="text text_type_digits-default mr-1">{price}</span>
                    <CurrencyIcon type="primary"/>
            </div>
            <span className="text text_type_main-default">{name}</span>
        </div>
        </div>
    );
}

export default Ingredient;