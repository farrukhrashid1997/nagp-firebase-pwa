import { Box, Grid } from "@mui/material";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import ManagerTimesheet from "../../components/ManagerTimesheet";
import TimesheetCard from "../../components/TimesheetCard";
import { db } from "../../firebaseConfig";

export default function ViewTimeSheetManager() {
  const [data, setData] = useState<any>({});



  
  const getEmail = (uid: string) => {
    const userRef = ref(db, "users/" + uid);
    let email = "";
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      email = data.email;
    });
    return email;
  };

  useEffect(() => {
    const timesheetRef = ref(db, "timesheet/");
    onValue(timesheetRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <Grid md={12} display="flex" container paddingBottom={4}>
      {data &&
        Object.keys(data).map((user) => {
          const email = getEmail(user);
          const timesheets = data[user];
          return Object.keys(timesheets).map((key) => {
            const timesheet = timesheets[key];
            return (
              <Grid md={3} xs={6} item p={0.5}>
                <ManagerTimesheet
                  currentStatus={timesheet.status}
                  description={timesheet.description}
                  start={timesheet.start}
                  end={timesheet.end}
                  userIdPath={`${user}/${key}`}
                  type={timesheet.type}
                />
              </Grid>
            );
          });
        })}
    </Grid>
  );
}
