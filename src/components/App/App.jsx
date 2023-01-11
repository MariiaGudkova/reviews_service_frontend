import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { routes } from "../../utils/routes";
import Header from "../Header/Header";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <Switch>
      <Route exact path={routes.baseRoute}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
      </Route>
    </Switch>
  );
}

export default App;
