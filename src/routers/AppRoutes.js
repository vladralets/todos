import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CreatePage from "../pages/CreatePage/CreatePage";
import Todos from "../pages/Todos/Todos";

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/todos" />
      <Route exact path="/todos">
        <Todos />
      </Route>
      <Route exact path="/create-todo">
        <CreatePage />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
