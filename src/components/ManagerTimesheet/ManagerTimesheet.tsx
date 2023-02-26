import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { ref, set } from "firebase/database";
import { DateTime } from "luxon";
import React from "react";
import { db } from "../../firebaseConfig";
import { TimesheetStatus } from "../../helpers/Constants";
import InfoCard from "../common/InfoCard";

export default function ManagerTimesheet({
  description,
  start,
  end,
  type,
  userIdPath,
  currentStatus,
}: {
  description: string;
  start: string;
  end: string;
  currentStatus: string;
  type: string;
  userIdPath: string;
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
        return "#C62828";
      default:
        break;
    }
  };

  const updateStatus = (status: `${TimesheetStatus}`) => {
    const timesheetRef = ref(db, `timesheet/${userIdPath}`);
    set(timesheetRef, {
      start: start,
      end: end,
      description: description,
      type: type,
      status,
    });
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
                backgroundColor: getStatusColor(currentStatus as `${TimesheetStatus}`),
                maxWidth: 100,
                alignItems: "center",
                borderRadius: 2,
                marginBottom: 2,
                color: "white",
              }}
            >
              {currentStatus}
            </Box>
          </Grid>
          <Grid xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => updateStatus(TimesheetStatus.approved)}
            >
              Approve
            </Button>
          </Grid>
          <Grid xs={6} justifyContent="flex-end" display="flex">
            <Button
              variant="contained"
              color="error"
              onClick={() => updateStatus(TimesheetStatus.rejected)}
            >
              Reject
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
