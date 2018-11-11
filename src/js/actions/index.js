import * as types from "../constants/ActionTypes";

export const addFilter = (feature, filterType) => ({
    type: types.ADD_FILTER,
    feature,
    filterType
});

export const removeFilter = (feature, filterType) => ({
    type: types.REMOVE_FILTER,
    feature,
    filterType
});

export const loading = (loadingIndicator) => ({
    type: types.LOADING,
    loadingIndicator
});
