import { IStore } from "../types/IStore";

export const getIsUserLoggedIn = (state: IStore) => state.user.isUserLoggedIn;
export const userEmail = (state: IStore) => state.user.email;
export const userType = (state: IStore) => state.user.type;
