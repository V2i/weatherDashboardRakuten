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
        default:
            return state;
    }
}

export default WeatherReducer;