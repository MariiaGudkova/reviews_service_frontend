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
import Profile from "../Profile/Profile";
import Review from "../Review/Review";
import { userReviews } from "../../utils/constants";
import Users from "../Users/Users";

function App() {
  const [isLogged, setIsLogged] = React.useState(true);
  const [isAdmin, setIsAdmin] = React.useState(true);

  return (
    <Switch>
      <Route exact path={routes.baseRoute}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Main />
        <Footer />
      </Route>
      <Route exact path={routes.signIn}>
        <Header isLogged={isLogged} isAdmin={isAdmin} isLogin={true} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} isLogin={true} />
        <Login />
        <Footer />
      </Route>
      <Route exact path={routes.signUp}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Register />
        <Footer />
      </Route>
      <Route exact path={routes.profile}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Profile />
        <Footer />
      </Route>
      <Route exact path={routes.review}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Review review={userReviews[0]} isLogged={isLogged} />
        <Footer />
      </Route>
      <Route exact path={routes.allUsers}>
        <Header isLogged={isLogged} isAdmin={isAdmin} />
        <MobileHeader isLogged={isLogged} isAdmin={isAdmin} />
        <Users />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
