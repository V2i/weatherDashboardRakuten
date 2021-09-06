
export const  weatherIcons = (weather) => {
    switch (weather){
        case("Clear"):
            return "fas fa-sun";
        case("Clouds"):
            return "fas fa-cloud";
        case("Rain"):
            return "fas fa-cloud-showers-heavy";
        case("Snow"):
            return "fas fa-snowflake";
        case("Smoke"):
            return "fas fa-smog";
        case("Mist"):
            return "fas fa-smog";
        case("Haze"):
            return "fas fa-smog";
        default:
            return "fas fa-rainbow";
    }
}