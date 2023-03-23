import React, {useMemo} from 'react';
import style from './Order.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientIconSub from "./IngredientIconSub";
import {useCalculateOrderDate} from "../../../../utils/hooks/useCalculateOrderDate";
import {openPopupOrderDetails} from "../../../modal/modalSlice";
import {useDispatch} from "react-redux";

function Order(props) {

    const dispatch =  useDispatch() // вызов метода для изменеие состояния
    const {item} = props
    const allIMG = useMemo(()=>[...new Set(item.bun.concat(item.main).map((item)=>item.image_mobile))], [item])

    const date = useCalculateOrderDate(item.date);

    return (
        <div className={style.card} onClick={()=> dispatch(openPopupOrderDetails(item))}>
            <p className={style.info}>{date.day} {date.time} </p>
            <p className={style.name}>Имя {item.id}</p>
            <div className={style.ingredients}>
                <div className={style.divimg}>
                    {allIMG.slice(0,5).map((item)=><img className={style.img} src={item}/>)}
                    {allIMG.length > 5 && <IngredientIconSub num={allIMG.length -5} img={allIMG[5]}></IngredientIconSub>}
                </div>
               <div className={style.price}>
                   <CurrencyIcon type="primary"/>
                   <p className={style.sumaPrice}>{item.sumaPrice}</p>
               </div>
            </div>
        </div>
    );
}

export default Order;