import { configureStore } from "@reduxjs/toolkit";
import zoneReducer from "./feature/zoneSlice";

export const store = configureStore ({
    reducer: {
        zone: zoneReducer,
    }
})