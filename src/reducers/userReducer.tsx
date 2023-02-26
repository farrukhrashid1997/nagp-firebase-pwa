import { createReducer } from "@reduxjs/toolkit";
import { loginUser } from "../actions/userActions";

export interface IUserReducer {
  email: string;
  isUserLoggedIn: boolean;
}

const initialState: IUserReducer = {
  email: "",
  isUserLoggedIn: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginUser, (state, { payload }) => {
    state.email = payload.email;
    state.isUserLoggedIn = true;
  });
});

export default userReducer;
