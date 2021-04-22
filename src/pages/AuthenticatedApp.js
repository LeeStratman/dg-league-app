import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { logoutRequest } from "../redux/auth/thunks";
import useUser from "../hooks/useUser";
import Sidebar from "../components/navigation/Sidebar";

const AuthenticatedApp = ({ logout }) => {
  const location = useLocation();
  const user = useUser();

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar user={user} pathname={location.pathname} logout={logout} />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutRequest()),
});

export default connect(null, mapDispatchToProps)(AuthenticatedApp);
