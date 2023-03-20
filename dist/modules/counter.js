import { produce } from "immer";
var SET_DIFF = "counter/SET_DIFF";
var INCREASE = "counter/INCREASE";
var DECREASE = "counter/DECREASE";
var initialState = {
    value: 0,
    diff: 1,
};
export var setDiff = function (diff) {
    return {
        type: SET_DIFF,
        diff: diff,
    };
};
export var increase = function () {
    return { type: INCREASE };
};
export var decrease = function () {
    return { type: DECREASE };
};
var counter = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case INCREASE:
            return produce(state, function (draft) {
                draft.value += parseInt(draft.diff);
            });
        case DECREASE:
            return produce(state, function (draft) {
                draft.value -= parseInt(draft.diff);
            });
        case SET_DIFF:
            return produce(state, function (draft) {
                draft.diff = action.diff;
            });
        default:
            return state;
    }
};
export default counter;
