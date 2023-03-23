import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './SelectedIngredient.module.css'
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {deleteSelectedIngredient} from "../../../selectedIngredientsSlice";
function SelectedIngredient(props) {
    const {item, isBun, type, index} = props;
    const dispatch  = useDispatch()
    return (
        <div className={style.elements}>
            {!isBun && <DragIcon type="primary" />}
            <ConstructorElement
                index={index}
                isLocked={isBun}
                text={item.name}
                type={type}
                price={item.price}
                thumbnail={item.image}
                handleClose={()=>{dispatch(deleteSelectedIngredient(index))}
            }/>
        </div>
    );
}

export default SelectedIngredient;