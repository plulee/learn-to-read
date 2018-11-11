import * as types from "../constants/ActionTypes";

const initialState = {
    pointsCount: 0
};

const points = (state = {...initialState}, action) => {
    switch (action.type) {
    case types.PUZZLE_SOLVED:
    {
        let pointsCount = state.pointsCount;
        pointsCount++;
        return {
                ...state,
                pointsCount
            };
    }
    default:
        return state;
    }
};

export default points;
