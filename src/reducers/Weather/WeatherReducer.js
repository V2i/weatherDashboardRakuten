const initialState = {
    loading: false,
    data: [],
    errorMsg: "",
};

const WeatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "WEATHER_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: "",
            };
        case "WEATHER_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: action.payload,
            };
        case "WEATHER_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: action.err,
            };
        case "WEATHER_LIST_REMOVE":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: state.data.filter(d => d.id !== action.id)
            };
        case "WEATHER_LIST_ADD":
            return {
                ...state,
                loading: false,
                errorMsg: false,
                data: [...state.data, action.payload],
            }
        default:
            return state;
    }
}

export default WeatherReducer;