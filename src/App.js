import React from "react";
import { connect } from "react-redux";

const AuthenticatedApp = React.lazy(() => import("./pages/AuthenticatedApp"));

const UnauthenticatedApp = React.lazy(() =>
  import("./pages/UnauthenticatedApp")
);

const App = ({ isLoggedIn = false }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(App);
