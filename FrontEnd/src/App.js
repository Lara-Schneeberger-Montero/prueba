import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/views/Home/Home";
import NotFound from "./components/componentes/NotFound";
import UserRegister from "./components/views/UserRegister/UserRegister";
import UserLogin from "./components/views/UserLogin/UserLogin";
import Product from "./components/views/Product/Product";
import GeneralTemplate from "./components/views/GeneralTemplate/GeneralTemplate";

function App() {
  return (
    <BrowserRouter>
      <GeneralTemplate>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/filtro/:titulo" component={Home} />
          <Route exact path="/filtro/:titulo/:id_ciudad" component={Home} />
          <Route exact path="/user-register" component={UserRegister} />
          <Route exact path="/user-login" component={UserLogin} />
          <Route exact path="/producto/:id_producto" component={Product} />
          <Route exact path="/producto/:id_producto/reserva" component={Product} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </GeneralTemplate>
    </BrowserRouter>
  );
}

export default App;
