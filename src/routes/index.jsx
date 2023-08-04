import React from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "../utils";

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={item.element}
        />
      ))}
    </Routes>
  );
};

export default MainRoutes;