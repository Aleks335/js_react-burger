import React, {useState} from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './AppHeader.module.css'
import {Link} from "react-router-dom";
// import {useGetIngredientsQuery} from "../../zstore/ingredientsApi";
function AppHeader(props) {
    return (
        <header className={style.header}>
            <div className={style.content}>
                <nav className="mt-4 mb-4">
                    <ul className={style.menu}>
                        <li>
                            <Link to={'/'} className={`${style.link} pr-5 pl-5 mr-2`}>
                                <BurgerIcon type="primary"/>
                                <p className={`${style.linkItem} ml-2 text text_type_main-default`}>Конструктор</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/orders'} className={`${style.link} pr-5 pl-5`}>
                                <ListIcon type="secondary"/>
                                <p className={`${style.linkItem} ml-2 text text_type_main-default text_color_inactive`}>Лента
                                    заказов</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={style.logo}>
                    <Logo/>
                </div>
                <div>

                    <nav className="mt-4 mb-4">
                        <Link to={'/office'} className={`${style.link} pr-5 pl-5`}>
                            <ProfileIcon type="secondary"/>
                            <p className={`${style.linkItem} ml-2 text text_type_main-default text_color_inactive`}>Личный
                                кабинет</p>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default AppHeader;