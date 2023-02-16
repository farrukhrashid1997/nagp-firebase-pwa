import "./App.css";
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from "@mui/material";
import Signup from "./pages/Signup";
import FillTimesheet from "./pages/FillTimesheet";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <FillTimesheet />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
