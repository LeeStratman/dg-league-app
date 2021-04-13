import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const AuthenticatedApp = React.lazy(() => import("./pages/AuthenticatedApp"));

const UnauthenticatedApp = React.lazy(() =>
  import("./pages/UnauthenticatedApp")
);

const App = ({ isLoggedIn = true }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? (
        <AuthenticatedApp>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </AuthenticatedApp>
      ) : (
        <UnauthenticatedApp />
      )}
    </React.Suspense>
  );
};

export default App;
