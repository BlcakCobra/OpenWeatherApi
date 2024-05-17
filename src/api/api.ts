import axios from "axios";

const apiKey:string = "69a7cc539ff8ac15a23f3450331fab4e";


const BaseApi = axios.create({
    baseURL: "https://api.openweathermap.org"
});

export const ApiMethods = {
    getCurrentWeatherData(lat:string,lon:string) {
        return  BaseApi.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    },
    getCall5Day(lat:string,lon:string) {
        return  BaseApi.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    }
}