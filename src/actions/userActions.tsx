import { createAction } from "@reduxjs/toolkit";
import { TypeOfEmployee } from "../helpers/Constants";

export const UserActions = {
  login: "LOGIN_USER",
};

export const loginUser = createAction<{
  email: string;
  type: `${TypeOfEmployee}`;
}>(UserActions.login);
