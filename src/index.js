import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import App from "./components/App";
import Navbar from "./components/Navbar";

const AddImage = () => {
  return <div>Hello</div>;
};

const NotFoundPage = () => {
  return <div>404 NOT FOUND</div>;
};
const Routes = (
  <HashRouter basename="/">
    <Navbar navTitle={"Stock Application"} />
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/image" component={AddImage} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(Routes, document.getElementById("root"));
