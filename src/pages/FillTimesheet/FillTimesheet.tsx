import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { set, ref, push } from "firebase/database";
import CustomTextField from "../../components/common/CustomTextField";
import { TimePicker } from "@mui/x-date-pickers";
import { db } from "../../firebaseConfig";
import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useFormik } from "formik";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userEmail } from "../../selectors/userSelector";
import { Email } from "@mui/icons-material";

export default function FillTimesheet() {
  const formik = useFormik({
    initialValues: {
      start: new Date(),
      end: new Date(),
      type: "",
      description: "",
    },
    onSubmit: (val) => {
      const auth = getAuth();
      const timesheetRef = ref(db, `timesheet/${auth.currentUser?.uid}`);
      const newTimesheetRef = push(timesheetRef);
      set(newTimesheetRef, {
        ...val,
      });
    },
  });

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ height: "100%", display: "flex", alignItems: "center" }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Fill Timesheet
        </Typography>
        <Box noValidate component="div" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TimePicker
                label="Start Time"
                value={formik.values.start}
                onChange={(date) => formik.setFieldValue("start", date)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TimePicker
                label="End Time"
                value={formik.values.end}
                onChange={(date) => formik.setFieldValue("end", date)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                label="Type of timesheet"
                name="type"
                onChange={(ev) => formik.handleChange(ev)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                minRows={5}
                onChange={(ev) => formik.handleChange(ev)}
                multiline
                name="description"
                label="Description"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => formik.handleSubmit()}
          >
            Submit Timesheet
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
