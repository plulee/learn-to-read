import * as types from "../constants/ActionTypes";

const initialState = {
    colors: [],
    categories: []
};

const filters = (state = {...initialState}, action) => {
    switch (action.type) {
    case types.ADD_FILTER:
    {
        const newState = {...state};
        const filter = action.filterType;
        const featureToAdd = action.feature;
        newState[filter] = [...new Set([...state[filter], featureToAdd])];
        return newState;
    }
    case types.REMOVE_FILTER:
    {
        const newState = {...state};
        const filter = action.filterType;
        const featureToRemove = action.feature;
        newState[filter] = state[filter].filter(feature => feature !== featureToRemove);
        return newState;
    }
    default:
        return state;
    }
};

export default filters;
