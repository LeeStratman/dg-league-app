import React from "react";

const AuthenticatedApp = React.lazy(() => import("./pages/AuthenticatedApp"));

const UnauthenticatedApp = React.lazy(() =>
  import("./pages/UnauthenticatedApp")
);

const App = ({ isLoggedIn = true }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

export default App;
