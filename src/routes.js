import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Pages/Home/index'
import Pedidos from './Pages/Pedidos/index'

function Routess() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/pedidos" Component={Pedidos} />
            </Routes>
        </BrowserRouter>



    )


}
export default Routess