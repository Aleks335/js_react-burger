import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerConstructor.module.css'
import SelectedIngredient from "./selected-ingredient/SelectedIngredient";
import {openPopupOrder} from "../../../modal/modalSlice";
import {useAddOrderMutation} from "../../../orders/ordersApi";
import {Navigate, useNavigate} from "react-router-dom";


function BurgerConstructor(props) {
    const {butt} = props
    const selectedIngredients = useSelector((state)=>{return state.selectedIngredients})

    const firstBun = selectedIngredients.bun[0]
    const lastBun = selectedIngredients.bun[1]

    const dispatch = useDispatch();
    const [addOrder, {isError}] = useAddOrderMutation()//возвращает массив  addNote-это функц для запрса
    const isAuth = useSelector((state)=>{return state.authDate.isAuth});
    const navigate = useNavigate()

    return (
        <section className={style.section}>
            <div className={style.elements}>
                {selectedIngredients.bun.length > 0 && <SelectedIngredient item={firstBun} isBun={true} type={'top'}></SelectedIngredient>}
                <div className={style.centralElements}>{selectedIngredients.main.map((item, index) => <SelectedIngredient index={index} item={item} isBun={false} type={undefined}></SelectedIngredient>)}</div>
                {selectedIngredients.bun.length > 1 && <SelectedIngredient item={lastBun} isBun={true} type={'bottom'}></SelectedIngredient>}
            </div>
            { butt && <div className={style.total}>
                <div className={style.price}>
                        <span className="text text_type_digits-medium mr-2">{selectedIngredients.sumaPrice}</span><CurrencyIcon type="primary"/>
                    </div>


                    <Button type="primary" size="large" onClick={(async ()=>{
                        if(!isAuth){
                            navigate('/office')
                            return
                        }
                        dispatch(openPopupOrder())
                        await addOrder(selectedIngredients).unwrap()
                    })}>Оформить заказ</Button>
                </div>
            }
        </section>
    )

}

export default BurgerConstructor;


