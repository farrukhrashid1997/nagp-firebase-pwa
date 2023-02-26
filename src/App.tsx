import "./App.css";
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from "@mui/material";
import Signup from "./pages/Signup";
import FillTimesheet from "./pages/FillTimesheet";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import { db } from "./firebaseConfig";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
