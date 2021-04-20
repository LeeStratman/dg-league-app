import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authorizeRequest } from "./redux/user/thunks";

const AuthenticatedApp = React.lazy(() => import("./pages/AuthenticatedApp"));

const UnauthenticatedApp = React.lazy(() =>
  import("./pages/UnauthenticatedApp")
);

const App = ({ isLoggedIn = false, authorizeRequest }) => {
  useEffect(() => {
    if (!isLoggedIn) {
      authorizeRequest();
    }
  }, [isLoggedIn, authorizeRequest]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  authorizeRequest: () => dispatch(authorizeRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
