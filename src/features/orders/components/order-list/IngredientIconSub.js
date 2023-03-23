import React from 'react';
import style from './IngredientIconSub.module.css';

function IngredientIconSub(props) {
    return (
        <div>
            <img className={style.img} src={props.img}></img>
            <p className={style.p}>+{props.num}</p>
        </div>
    );
}

export default IngredientIconSub;