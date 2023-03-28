import {createSlice} from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        isError: false,
        errorMessage: 'There is an error happening'
    },
    reducers: {
        SET_ERROR : (state, action) => {
            console.log(action);
            state.isError = action.payload || state.errorMessage;
        }
    }
})

const {actions, reducer} = errorSlice;
export default reducer;
const {SET_ERROR} = actions;
const {SET_ERROR_MESSAGE} = actions;

export const setError = (haveError, errorMessage) => (dispatch) => {
    console.log(haveError, errorMessage)
    dispatch(SET_ERROR(haveError));
    dispatch(SET_ERROR_MESSAGE(errorMessage));
}
