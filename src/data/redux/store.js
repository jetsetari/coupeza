import  { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './settingsSlice';
//import eidReducer from './eidSlice';
// import usersReducer from '../features/users/usersSlice';


export const store = configureStore({
	reducer : {
		settings: settingsReducer
	}
});