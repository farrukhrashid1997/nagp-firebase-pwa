import React from "react";
import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import FillTimesheet from "../FillTimesheet";
import ViewTimesheetManager from "../ViewTimesheetManager";

import ResponsiveAppBar from "../../components/AppBar";
import ViewTimesheet from "../ViewTimesheet";
import { RoutesConfig, TypeOfEmployee } from "../../helpers/Constants";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userType } from "../../selectors/userSelector";

export default function Home() {
  const employeeType = useAppSelector(userType);
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Box component="div" sx={{ width: "100%", position: "fixed", zIndex: "99", height: "20%" }}>
        <ResponsiveAppBar />
      </Box>
      <Box sx={{ height: "80%", paddingTop: 10 }}>
        {employeeType === TypeOfEmployee.employee ? (
          <Routes>
            <Route path={RoutesConfig.fillTimesheet} element={<FillTimesheet />} />
            <Route path={RoutesConfig.viewTimesheet} element={<ViewTimesheet />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={RoutesConfig.fillTimesheetManager} element={<ViewTimesheetManager />} />
          </Routes>
        )}
      </Box>
    </Box>
  );
}
