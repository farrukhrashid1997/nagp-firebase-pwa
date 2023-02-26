import { Box, Card, CardContent, Grid } from "@mui/material";
import { DateTime } from "luxon";
import React from "react";
import { TimesheetStatus } from "../../helpers/Constants";
import InfoCard from "./InfoCard";

export default function TimesheetCard({
  description,
  start,
  end,
  type,
  status,
}: {
  description: string;
  start: string;
  end: string;
  type: string;
  status: string;
}) {
  const dtStart = DateTime.fromISO(start);
  const dtEnd = DateTime.fromISO(end);

  const getStatusColor = (status: `${TimesheetStatus}`) => {
    switch (status) {
      case TimesheetStatus.pending:
        return "grey";
      case TimesheetStatus.approved:
        return "green";
      case TimesheetStatus.rejected:
        return "red";
      default:
        break;
    }
  };

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Grid container>
          <Grid xs={6}>
            <InfoCard
              label="Time"
              content={`${dtStart.hour}:${dtStart.minute} - ${dtEnd.hour}:${dtEnd.minute}`}
            />
          </Grid>
          <Grid xs={6} display="flex" justifyContent="flex-end">
            <InfoCard label="Type" content={type} />
          </Grid>
          <Grid xs={12}>
            <InfoCard label="Description" content={description} />
          </Grid>
          <Grid xs={12} alignItems={"center"}>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: 2,
                padding: 1,
                backgroundColor: getStatusColor(status),
                maxWidth: 100,
                alignItems: "center",
                borderRadius: 2,
                color: "white",
              }}
            >
              {status}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
