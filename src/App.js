// App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import LandingPage from "./LandingPage";
import LogIn1 from "./LogIn1";
import LogIn2 from "./LogIn2";

function DefaultRouteComponent() {
  return <div></div>;
}

function App() {
  return (
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/sign-up-1" element={<SignUp1 />} />
      <Route path="/sign-up-2" element={<SignUp2 />} />
      <Route path="/log-in-1" element={<LogIn1 />} />
      <Route path="/log-in-2" element={<LogIn2 />} />
      {/* Redirect to /sign-up-1 when root URL is visited */}
      <Route path="/" element={<Navigate to="/sign-up-1" />} />
      {/* You can also use the DefaultRouteComponent for the root URL */}
      <Route path="/" element={<DefaultRouteComponent />} />
    </Routes>
  );
}

export default App;
