import React from "react";
import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import FillTimesheet from "../FillTimesheet";
import ResponsiveAppBar from "../../components/AppBar";

export default function Home() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid sx={{ width: "100%" }}>
        <Box component="div" sx={{ width: "100%", position: "fixed", zIndex: "99" }}>
          <ResponsiveAppBar />
        </Box>
        <Box sx={{height: "100%"}}>
          <Routes>
            <Route path="/" element={<FillTimesheet />} />
          </Routes>
        </Box>
      </Grid>
    </Box>
  );
}
