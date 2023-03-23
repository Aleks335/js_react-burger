import React, {useState} from 'react';
import styleOffice from "./OfficePage.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useAddUserMutation} from "../features/auth/authApi";
import {useSelector} from "react-redux";

function OfficeRegistration(props) {


    const isAuth = useSelector((state)=>{return state.authDate.isAuth});
    const navigate = useNavigate()

    const [addUser, {isError}] = useAddUserMutation();
    const [state, setState] = useState({login:'', pass:'', spam:'', delButton:true});

    async function submitHandler(evt) {
        evt.preventDefault();
        if((state.login.length > 3) && (state.pass.length > 3))
        {
            await addUser({login:state.login, pass: state.pass}).unwrap();
            setState({...state, spam: "Регестрация прошла успешна", delButton: false})
            setTimeout(()=> navigate('/'),2000);
        }else setState({...state, spam: "логин и пароль дол больше 3х"})
    }


    return (
        <div className={styleOffice.form}>
            <form onSubmit={((evt)=> submitHandler(evt))} className={styleOffice.form}>

                <p>Регистрация</p>

                <input onInput={(evt)=>{
                    setState({...state, login: evt.target.value})
                }}
                    // onChange={onChange}
                    // value={value}
                    name={'email'}
                    placeholder="Логин"
                    // isIcon={true}
                    extraClass="mb-2"
                />
                <p style={{padding:1}}></p>
                <input onInput={(evt)=>{
                    setState({...state, pass: evt.target.value})
                }}
                    // onChange={onChange}
                    // value={value}
                    placeholder="пароль"
                    name={'password'}
                    extraClass="mb-2"
                />

                <p style={{padding:1}}></p>
                <span>{state.spam}</span>
                {
                    state.delButton && <Button type="primary" size="medium">Регистрация</Button>
                }
            </form>
            <div className={styleOffice.form}>
                <p>Вы новый пользователь?
                    <Link className='navLink' to={'/office'}>Войти</Link>
                </p>
            </div>
        </div>
    );
}

export default OfficeRegistration;