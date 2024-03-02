import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/homeShared/SharedLayout";
import Login from "./pages/home/Login";
import Register from "./pages/home/Register";
import Home from "./pages/home/Home";
import Avatar from "./pages/home/Avatar";
import Smtp from "./pages/home/Smtp";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import DashboardLayout from "./components/shared/authenticatedShared/DashboardLayout";
import Projects from "./pages/authenticated/Projects";
import Project from "./pages/authenticated/Project";
import Upgrade from "./pages/authenticated/Upgrade";
import Support from "./pages/authenticated/Support";
import NotFound from "./pages/NotFound";
// import Projects from "./pages/authenticated/Projects";

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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <Projects />
                </ProtectedRoute>
              }
            />

            <Route
              path="upgrade"
              element={
                <ProtectedRoute>
                  <Upgrade />
                </ProtectedRoute>
              }
            />

            <Route
              path="support"
              element={
                <ProtectedRoute>
                  <Support />
                  {/* <Support /> */}
                </ProtectedRoute>
              }
            />
            <Route
              path="projects/:projectId"
              element={
                <ProtectedRoute>
                  <Project />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
