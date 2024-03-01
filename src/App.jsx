import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/homeShared/SharedLayout";
import Login from "./pages/home/Login";
import Register from "./pages/home/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* {/* <Route index element={<Home />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
