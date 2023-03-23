import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function PrivtaeRouteOverlay(props) {
    const isAuth = useSelector((state)=>{return state.authDate.isAuth});

    return (
        <div>
            {
                isAuth ? props.children : <Navigate to={'/office'}></Navigate>
            }

        </div>
    );
}

export default PrivtaeRouteOverlay;