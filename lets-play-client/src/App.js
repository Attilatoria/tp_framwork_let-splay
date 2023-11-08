import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import HomeConnect from "./pages/HomeConnect";
import AllUsers from "./pages/AllUsers";
import User from "./pages/OneUser";
import Game from "./pages/Game";
import Me from "./pages/Me";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth-register" element={<Register />}></Route>
        <Route path="/" element={<HomeConnect />}></Route>
        <Route path="/users" element={<AllUsers />}></Route>
        <Route path="/modify" element={<User />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>

    </BrowserRouter >
  )
}

export default App