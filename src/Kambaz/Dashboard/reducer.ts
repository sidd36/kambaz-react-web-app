import { enrollments } from "../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollmentClicked: false,
    enrollments: enrollments
}

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState: initialState,
    reducers: {
        enroll: (state, {payload: enrollment}) => {
            state.enrollments = [...state.enrollments, enrollment];
            console.log(state.enrollments)
        },
        unEnroll: (state, {payload: enrollment}) => {
            const e =  state.enrollments.find((e: any) => e.course === enrollment.course && e.user === enrollment.user)
            state.enrollments = state.enrollments.filter(enrollment => e !== enrollment);
        },
        enrollmentToggle: (state, {payload: clicked}) => {
            state.enrollmentClicked = clicked;
        }
    }
})

export const { enrollmentToggle, enroll, unEnroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;