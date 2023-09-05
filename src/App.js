import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserMenu from "./layout/adminMenu";
import Footer from "./layout/footer";
import Header from "./layout/header";
import EditUser from "./pages/editUser";
import Home from "./pages/home";
import ListUser from "./pages/listUser";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { getToken } from "./service/authUtil";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token exists in local storage

    // You may need to validate the token's authenticity here
    // For example, you can send it to your server for validation

    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {isLoggedIn ? <UserMenu /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<ListUser />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/users/edit/:id" element={<EditUser />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
