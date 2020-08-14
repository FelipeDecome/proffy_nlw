import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import LessonRegisterSuccess from "./pages/MessagePages/LessonRegister/Success";
import LessonRegisterError from "./pages/MessagePages/LessonRegister/Error";

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route exact path="/give-classes" component={TeacherForm} />
        <Route path="/give-classes/success" component={LessonRegisterSuccess} />
        <Route path="/give-classes/error" component={LessonRegisterError} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
