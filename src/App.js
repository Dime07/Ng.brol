import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Messages = React.lazy(() => import("./pages/Messages"))

export default function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <Route exact path={`/`} component={Home} />
        </Switch>
        <Switch>
          <Route path={'/messages'} component={Messages} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}
