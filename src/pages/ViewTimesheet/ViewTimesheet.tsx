import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import { getAuth } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import TimesheetCard from "../../components/TimesheetCard";
import { db } from "../../firebaseConfig";

export default function ViewTimesheet() {
  const auth = getAuth();
  const [timesheetData, setTimesheetData] = useState<any>();

  //timesheet data for the user
  useEffect(() => {
    const timesheetRef = ref(db, "timesheet/" + auth?.currentUser?.uid);
    onValue(timesheetRef, (snapshot) => {
      const data = snapshot.val();
      setTimesheetData(data);
    });
  }, []);

  return (
    <Grid md={12} display="flex" container paddingBottom={4}>
      {timesheetData &&
        Object.keys(timesheetData).map((key) => {
          const d = timesheetData[key];
          return (
            <Grid md={3} xs={6} item p={0.5}>
              <TimesheetCard
                description={d.description}
                start={d.start}
                end={d.end}
                status={d.status}
                type={d.type}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
