import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomTextField from "../../components/common/CustomTextField";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getIsUserLoggedIn } from "../../selectors/userSelector";
import { useNavigate } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebaseConfig";

export default function SignIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLoggedIn = useAppSelector(getIsUserLoggedIn);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const userRef = ref(db, "users/" + user.uid);
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            user.email && dispatch(loginUser({ email: user.email, type: data.type }));
          });
        })
        .catch((err) => console.log(err.message));
    },
  });

  React.useEffect(() => {
    isUserLoggedIn && navigate("/");
  }, [isUserLoggedIn]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }} component="div">
          <CustomTextField
            required
            fullWidth
            onChange={(ev) => {
              formik.handleChange(ev);
            }}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <CustomTextField
            required
            fullWidth
            name="password"
            label="Password"
            onChange={(ev) => {
              formik.handleChange(ev);
            }}
            autoComplete="current-password"
          />
          <Button
            onClick={() => {
              formik.handleSubmit();
            }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              navigate("/signup")
            }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
