import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Artists from "./pages/artists/Artists";
import Artworks from "./pages/artworks/Artworks";
import Periods from "./pages/periods/Periods";
import Login from "./pages/Login_and_Register/Login";
import Register from "./pages/Login_and_Register/Register";
import SingleArtworkPage from "./pages/singlesPage/SingleArtworkPage";
import SearchResultPG from "./pages/searchedpages/SearchResultPG";
import SubmissionPg from "./pages/submission/SubmissionPg";
import { useState } from "react";
import Header from "./components/headrer/Header";
import AdminNavForm from "./admin/adminLog";
import UserManager from "./admin/manageUsers";
import ArtworkManager from "./admin/manageWorks";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(false);

  return (
      <BrowserRouter>
        <Routes>
          <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin}/>
                  <HomePage />
                </>
              }
          />
          <Route
              path="/artists"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin}/>
                  <Artists />
                </>
              }
          />
          <Route
              path="/artworks"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn } isAdmin={isAdmin}/>
                  <Artworks />
                </>
              }
          />
          <Route
              path="/periods"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin}/>
                  <Periods />
                </>
              }
          />
          <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} setToken={setToken}/>}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/submit" element={<SubmissionPg />} />
          <Route path="/singleArtwork/:id" element={<SingleArtworkPage />} />
          <Route path="/searched" element={<SearchResultPG />} />
          <Route path="/admin" element={<AdminNavForm token={token}/>}/>
          <Route path="/admin/user" element={<UserManager token={token}/>}/>
          <Route path="/admin/work" element={<ArtworkManager />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
/*
* <Route path="/admin" element={<AdminNavForm token={token}/>}/>
          <Route path="/admin/user" element={<UserManager token={token}/>}/>*/