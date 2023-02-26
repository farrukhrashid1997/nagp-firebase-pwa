import React from "react";
import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import FillTimesheet from "../FillTimesheet";
import ResponsiveAppBar from "../../components/AppBar";
import ViewTimesheet from "../ViewTimesheet";
import { RoutesConfig } from "../../helpers/Constants";

export default function Home() {
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
        <Routes>
          <Route path={RoutesConfig.fillTimesheet} element={<FillTimesheet />} />
          <Route path={RoutesConfig.viewTimesheet} element={<ViewTimesheet />} />
        </Routes>
      </Box>
    </Box>
  );
}
