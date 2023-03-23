import React from 'react';
import AppHeader from "./features/app-header/AppHeader";
import {Route, Routes} from "react-router-dom";
import ConstructorPage from "./pages/ConstructorPage";
import OfficePage from "./pages/OfficePage";
import OrdersListPage from "./pages/OrdersListPage";
import OfficeRegistration from "./pages/OfficeRegistration";
import OfficeRestore from "./pages/OfficeRestore";
import PrivtaeRouteOverlay from "./utils/PrivtaeRouteOverlay";

function App() {
    return (
        <div>
            <AppHeader></AppHeader>
            <Routes>
                {/*создание страниц*/}
                <Route path={'/'} element={<ConstructorPage/>}></Route>
                <Route path={'/orders'} element={<PrivtaeRouteOverlay><OrdersListPage/></PrivtaeRouteOverlay>}></Route>
                <Route path={'/office'} element={<OfficePage/>}></Route>
                <Route path={'/registration'} element={<OfficeRegistration/>}></Route>
                <Route path={'/restore'} element={<OfficeRestore/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
