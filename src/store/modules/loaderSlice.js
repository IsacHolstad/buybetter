import {createSlice} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
    },
    reducers: {
        SET_LOADING: (state, actions) => {
            state.isLoading = actions.payload;
        }
    }
})

const {actions, reducer} = loaderSlice;
export default reducer;
const {SET_LOADING} = actions;

export const setLoadingState = (loadingStatus) => (dispatch) => {
    dispatch(SET_LOADING(loadingStatus));
}