import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import LoginPage from "./pages/Login";
import Layout from "./Layout";
import RegisterPage from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/Profile";
import PlacesPage from "./pages/Places";
import PlacesFormPage from "./pages/PlacesForm";
import PlacePage from "./pages/Place";
import BookingPage from "./pages/Booking";
import BookingsPage from "./pages/Bookings";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
          <Route path="/account/bookings/" element={<BookingsPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
