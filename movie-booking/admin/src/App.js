import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import AddCategory from "./pages/AddCategory";
import AddMovie from "./pages/AddMovie";
import ManageShowtime from "./pages/ManageShowtime";
import BookedMovies from "./pages/BookedMovies";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <div className="flex">
        {token && <Sidebar />}
        <div className={token ? "flex-1 ml-64 p-4" : "flex-1 p-4"}>
          <Routes>
            <Route
              path="/login"
              element={token ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/add-category"
              element={
                <PrivateRoute>
                  <AddCategory />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-movie"
              element={
                <PrivateRoute>
                  <AddMovie />
                </PrivateRoute>
              }
            />
            <Route
              path="/manage-showtime"
              element={
                <PrivateRoute>
                  <ManageShowtime />
                </PrivateRoute>
              }
            />
            <Route
              path="/booked-movies"
              element={
                <PrivateRoute>
                  <BookedMovies />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to={token ? "/add-category" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
