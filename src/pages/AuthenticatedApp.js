import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import MainContent from "../components/content/MainContent";
import LinkRouter from "../components/LinkRouter";

const AuthenticatedApp = ({ logout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <MainContent setSidebarOpen={setSidebarOpen}>
          <LinkRouter />
        </MainContent>
      </div>
    </>
  );
};

export default AuthenticatedApp;
