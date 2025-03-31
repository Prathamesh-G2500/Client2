import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RestaurantDetails from "./RestaurantDetails";
import RestaurantsByCity from "./RestaurantByCity";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantsByCity/>} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
