import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./routers/AppRoutes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
