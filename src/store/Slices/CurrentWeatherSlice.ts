import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiMethods } from "../../api/api";
import  { AxiosResponse } from "axios";
import {WeatherData,CurrentWeatherInitialState } from "../../types/SliceType";
import { ForecastResponse } from "../../types/5daysType";


export const AsyncCurrentWeather = createAsyncThunk<WeatherData, { lat: string, lon: string }>(
    "AsyncCurrentWeather",
    async ({ lat, lon }) => {
        const res: AxiosResponse<WeatherData> = await ApiMethods.getCurrentWeatherData(lat, lon);
        return res.data;
    }
);
export const AsyncCall5Day = createAsyncThunk<ForecastResponse, { lat: string, lon: string }>(
    "AsyncCall5Day",
    async ({ lat, lon }) => {
        const res: AxiosResponse<ForecastResponse> = await ApiMethods.getCall5Day(lat,lon)
        return res.data;
    }
);
const initialState: CurrentWeatherInitialState = {
    weatherNow: null,
    weather5Days:null,
    status: ""
};

export const currentWeather = createSlice({
    name: "currentWeather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AsyncCurrentWeather.pending, (state) => {
                state.status = "pending";
            })
            .addCase(AsyncCurrentWeather.fulfilled, (state, action) => {
                state.weatherNow = action.payload;
                state.status = "fulfilled";
            })
            .addCase(AsyncCurrentWeather.rejected, (state) => {
                state.status = "rejected";
            })


            .addCase(AsyncCall5Day.pending, (state) => {
                state.status = "pending";
            })
            .addCase(AsyncCall5Day.fulfilled, (state, action) => {
                state.weather5Days = action.payload;
                state.status = "fulfilled";
            })
            .addCase(AsyncCall5Day.rejected, (state) => {
                state.status = "rejected";
            });
    }
});

export default currentWeather.reducer;