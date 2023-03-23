import React from 'react';
import styles from './OverlayDetails.module.css'
import {useDispatch} from "react-redux";
import {closePopupIngredient, closePopupOrder} from "../../modalSlice";
import {useSelector} from "react-redux";

function OverlayDetails(props) {
    const dispatch = useDispatch();
    const closeModal = useSelector((state)=>{return state.modal})

    return (
        <div className={styles.back_container} onClick={((evt)=>{
            evt.currentTarget === evt.target && dispatch(
                closeModal.popupIngredient && closePopupIngredient()
                ||
                closeModal.popupOrder && closePopupOrder())})}>
            {props.children}
        </div>
    );
}

export default OverlayDetails;