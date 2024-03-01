import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/homeShared/SharedLayout";
import Login from "./pages/home/Login";
import Register from "./pages/home/Register";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import DashboardLayout from "./components/shared/authenticatedShared/DashboardLayout";
import Projects from "./pages/authenticated/Projects";
import Project from "./pages/authenticated/Project";
// import Projects from "./pages/authenticated/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SharedLayout />}>
            {/* {/* <Route index element={<Home />} /> */}
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
              path="projects/:projectId"
              element={
                <ProtectedRoute>
                  <Project />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
