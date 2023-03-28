import {createSlice} from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'loading',
    getInitialState: {
        isLoading: false
    },
    reducers: {
        SET_LOADING: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

const {actions, reducer} = loadingSlice;
export default reducer;
const {SET_LOADING} = actions;

export const setLoadingState = (loadingStatus) => (dispatch) => {
    dispatch(SET_LOADING(loadingStatus));
}