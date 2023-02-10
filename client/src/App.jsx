import { Route, Routes } from "react-router-dom";
import HotelWapper from "./components/mainWrappers/HotelWapper";
import AssignedRoutes from "./config/AssignedRoutes";
import PreventRoutes from "./config/PreventRoutes";
import ProtectedRoutes from "./config/ProtectedRoutes";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import ErrorPage from "./pages/auth/Error";
import Login from "./pages/auth/Login";
import Unauthorized from "./pages/auth/Unauthorized";
import Dashboard from "./pages/private/Dashboard";
import DetailsPage from "./pages/private/DetailsPage";
import Hotels from "./pages/private/Hotels";
import Home from "./pages/public/Home";

const ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
}

const role = 'admin';
const isAuthenticated = true;

function App() {
  return (
    <Routes>

      // User Routes
      <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
        <Route element={<AssignedRoutes allowedRoles={[ROLES.CUSTOMER, ROLES.ADMIN]} role={role} />}>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            // Hotels Route
            <Route path="/hotels">
              <Route index={true} element={<Hotels />} />
              <Route index={false} path=":teamId" element={<DetailsPage />} />
            </Route>
          </Route>
        </Route>

        // Admin Routes
        <Route element={<AssignedRoutes allowedRoles={[ROLES.ADMIN]} role={role} />}>
            <Route path="dashboard" element={<AdminLayout /> }>
              <Route index element={<Dashboard />} />
            </Route>
        </Route>
      </Route>
      // Rest
      <Route element={<PreventRoutes isAuthenticated={isAuthenticated} />} >
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App