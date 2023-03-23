import React from 'react';
import styleOffice from "./OfficePage.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

function OfficeRestore(props) {
    return (
        <div className={styleOffice.form}>
            <form className={styleOffice.form}>
                <p>Восстановление пароля</p>
                <p style={{padding:1}}></p>
                <EmailInput
                    // onChange={onChange}
                    // value={value}
                    name={'email'}
                    isIcon={false}
                />
                <p style={{padding:1}}></p>
                {
                    <Button htmlType="button" type="primary" size="medium">
                        Восстановить
                    </Button>
                }
            </form>
            <div className={styleOffice.form}>
                <p>Вспомнили пароль?
                    <Link className='navLink' to={'/office'}>Войти</Link>
                </p>
            </div>
        </div>
    );
}

export default OfficeRestore;