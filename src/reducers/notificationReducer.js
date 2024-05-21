import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        notificationSetting(state, action) {
            return action.payload
        },
        notificationRemoving() {
            return ''
        }
    }
})

export const {notificationSetting, notificationRemoving} = notificationSlice.actions
export default notificationSlice.reducer