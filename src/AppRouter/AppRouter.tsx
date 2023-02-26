import Login from "../pages/Login";
import { createTheme, ThemeProvider } from "@mui/material";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "../hooks/useAppSelector";
import { getIsUserLoggedIn } from "../selectors/userSelector";
import Home from "../pages/Home";

function AppRouter() {
  const theme = createTheme();
  const isUserLoggedIn = useAppSelector(getIsUserLoggedIn);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <ProtectedRoute authenticated={isUserLoggedIn}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default AppRouter;
