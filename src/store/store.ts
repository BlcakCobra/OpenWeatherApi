import { configureStore } from "@reduxjs/toolkit";
import { currentWeather } from "./Slices/CurrentWeatherSlice";

export const store = configureStore({
    reducer:{
        currentWeather:currentWeather.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;