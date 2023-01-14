import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { routes } from "../../utils/routes";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <Switch>
      <Route exact path={routes.baseRoute}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Main />
        <Footer isAdmin={isAdmin} />
      </Route>
      <Route exact path={routes.signIn}>
        <Header isLogged={isLogged} isAdmin={isAdmin} isLogin={true} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} isLogin={true} />
        <Login />
        <Footer isAdmin={isAdmin} />
      </Route>
      <Route exact path={routes.signUp}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Register />
        <Footer isAdmin={isAdmin} />
      </Route>
    </Switch>
  );
}

export default App;
