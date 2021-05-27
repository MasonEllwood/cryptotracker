export const SET_TRENDING = 'SET_TRENDING';
export const INIT = '';

export default function (state = INIT, { type, payload }) {
    console.log(type);
    switch (type) {
        case SET_TRENDING:
            return payload;

        default:
            return state;
    }
}
