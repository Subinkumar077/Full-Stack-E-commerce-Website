import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from "./components/Layout/UserLayout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User route */}
        <Route path='/' element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
