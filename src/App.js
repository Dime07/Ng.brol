import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <Route exact path={`/`} component={Home} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}
