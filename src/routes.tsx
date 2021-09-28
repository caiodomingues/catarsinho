import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/project/:id" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
