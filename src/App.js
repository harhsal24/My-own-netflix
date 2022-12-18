import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context.js/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Player from "./components/Player";
import Moviepage from "./components/Moviepage";
import GenrePage from "./components/GenrePage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/GenrePage/:gId" element={<GenrePage/>}/>
          <Route
            path="/Moviepage/:mId"
            element={
              <ProtectedRoute>
                <Moviepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/player" element={<Player />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
