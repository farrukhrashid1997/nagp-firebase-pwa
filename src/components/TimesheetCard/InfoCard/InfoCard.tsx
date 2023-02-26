import { Box } from "@mui/material";
import React from "react";

function InfoCard({ label, content }: { label: string; content: string }) {
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", margin: 2 }}>
      <Box sx={{ color: "gray", fontSize: 12, paddingBottom: 0.5 }}>{label}</Box>
      <Box sx={{ wordBreak: "break-all" }}>{content}</Box>
    </Box>
  );
}

export default InfoCard;
