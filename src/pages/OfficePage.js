import React, {useState} from 'react';
import styleOffice from './OfficePage.module.css';

import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useLoginUserMutation} from "../features/auth/authApi";

function OfficePage(props) {
    const navigate = useNavigate()
    const [spanText, setSpanText] = useState('');
    const [loginUser, {isError}] = useLoginUserMutation();

    async function submitHandler(evt) {
        evt.preventDefault();
        // setSpanText
        try {
            await loginUser({login:state.login, pass: state.pass}).unwrap();
            setSpanText('Вы авторизериваны')
            setState({...state, delButton: false})
            setTimeout(()=>navigate('/'), 2000)

        }catch (e) {
            console.log('e', e)
            e.originalStatus === 401 &&  setSpanText('Не верный лог или пар')
            e.originalStatus !== 401 &&  setSpanText('Ошибка кода')
        }
    }
    const [state, setState] = useState({login:'', pass:'', delButton:true});

    return (

        <div className={styleOffice.form}>
            <form onSubmit={((evt)=> submitHandler(evt))} className={styleOffice.form}>
                <p>Вход</p>
                <input onInput={(evt)=>setState({...state, login: evt.target.value})}
                    // onChange={onChange}
                    // value={target.value}
                    name={'email'}
                    isIcon={false}
                />
                <span></span>
                <p style={{padding:1}}></p>
                <input onInput={(evt)=>setState({...state, pass : evt.target.value})}
                    // onChange={onChange}
                    // value={value}
                    name={'password'}
                    extraClass="mb-2"
                />
                <span className={styleOffice.span}>{spanText}</span>
                <p style={{padding:1}}></p>

                {
                    state.delButton && <Button type="primary" size="medium">Войти</Button>
                }
            </form>
            <div className={styleOffice.form}>
                <p>Вы новый пользователь?
                    <Link className='navLink' to={'/registration'}>Зарегистрироваться</Link>
                </p>
                <p>Забыли пароль?
                    <Link className='navLink' to={'/restore'}>Восстановить пароль</Link>
                </p>
            </div>
        </div>
    );
}

export default OfficePage;