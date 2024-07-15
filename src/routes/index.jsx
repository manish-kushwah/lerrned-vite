import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "../views/home";
import NotFound from "../views/static/NotFound";
import Connect from "../views/connect";

const AppRoutes = () => {
  const location = useLocation();

  const DynamicComp = () => {
    return <Home />;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<DynamicComp />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
