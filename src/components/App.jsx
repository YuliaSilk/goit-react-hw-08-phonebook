import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { useAuth } from "./hooks";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "redux/auth/operations";

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));


export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={RegisterPage} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={LoginPage} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={ContactPage} />}
        />
      </Route>
    </Routes>
  );
};














