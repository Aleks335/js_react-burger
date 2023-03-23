import React from 'react';
import Ingredient from "./Ingredient/Ingredient";
import style from "./IngredientsCategory.module.css"

function IngredientsCategory(props) {
    const {title, ingredients} = props

    return (
        <div className={style.grid}>
            <p className={`${style.name} text text_type_main-medium`}>{title}</p>
            {
                ingredients.map((sre) => <Ingredient
                    item={sre}
                ></Ingredient>)
            }
        </div>
    );
}

export default IngredientsCategory;