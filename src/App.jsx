import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/homeShared/SharedLayout";
import Login from "./pages/home/Login";
import Register from "./pages/home/Register";
import Home from "./pages/home/Home";
import Avatar from "./pages/home/Avatar";
import Smtp from "./pages/home/Smtp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Smtp" element={<Smtp />} />
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
