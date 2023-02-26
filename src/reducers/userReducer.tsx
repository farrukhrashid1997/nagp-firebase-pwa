import { createReducer } from "@reduxjs/toolkit";
import { loginUser } from "../actions/userActions";
import { TypeOfEmployee } from "../helpers/Constants";

export interface IUserReducer {
  email: string;
  isUserLoggedIn: boolean;
  type: `${TypeOfEmployee}`;
}

const initialState: IUserReducer = {
  email: "",
  isUserLoggedIn: false,
  type: "Employee",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginUser, (state, { payload }) => {
    state.email = payload.email;
    state.isUserLoggedIn = true;
    state.type = payload.type;
  });
});

export default userReducer;
