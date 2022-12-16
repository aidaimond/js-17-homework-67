import {configureStore} from "@reduxjs/toolkit";
import {codeReducer} from "../containers/DoorCode/doorCodeSlice";

export const store = configureStore({
  reducer: {
    code: codeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;