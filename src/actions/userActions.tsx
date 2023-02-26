import { createAction } from "@reduxjs/toolkit";

export const UserActions = {
  login: "LOGIN_USER",
};

export const loginUser = createAction<{
  email: string;
}>(UserActions.login);
