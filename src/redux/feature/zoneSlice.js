import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const zoneSlice = createSlice({
    name: "zone",
    initialState,
    reducers: {
        SET_ZONE(state, action) {
            state.value = action.payload
        }
    }
})

export const {SET_ZONE} = zoneSlice.actions;
export const selectZone = (state) => state.zone.value;


export default zoneSlice.reducer;