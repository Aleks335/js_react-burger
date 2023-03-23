import React, {useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "./ingredients-category/IngredientsCategory";
import style from "./BurgerIngredients.module.css"
import {useSelector} from "react-redux";
import {useGetIngredientsQuery} from "../../ingredientsApi";

function BurgerIngredients(props) {
    const [current, setCurrent] = useState('bun')

    const bun = useSelector((state)=> state.selectedIngredients.bun)
    const main = useSelector((state)=> state.selectedIngredients.main)
    const selectedIngredients = bun.concat(main)
    const {data={}, isLoading}=useGetIngredientsQuery()

    // сделали копии data, selectedIngredients
    const ingredients = data.ingredients?.slice().map((item)=> {
        const count = selectedIngredients.filter((element)=>element._id === item._id).length
        return Object.assign({}, item, {count:count})
    })
    function getIngredientsList() {
        return [
            {ingredients: ingredients.filter((item) => item.type === 'bun'), name: 'Булки', type: 'bun'},
            {ingredients: ingredients.filter((item) => item.type === 'sauce'), name: 'Соусы', type: 'sauce'},
            {ingredients: ingredients.filter((item) => item.type === 'main'), name:'Начинки', type:'main'},
        ]
    }
    return (
        <section className={style.section}>
            <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
            <ul className={style.list}>
                <li><Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab></li>
                <li><Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab></li>
                <li><Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab></li>
            </ul>


            {/*norm*/}
            <div className={style.ingredients}>
                {
                    !isLoading && getIngredientsList().slice().sort((a, b) => {
                        if (a.type === current) return -1;
                        if (a.type !== current) return 1;
                    }).map((item) => {
                        return <IngredientsCategory ingredients={item.ingredients} title={item.name}></IngredientsCategory>
                    })
                }
            </div>
        </section>
    )
}

export default BurgerIngredients;