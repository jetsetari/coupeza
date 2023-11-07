import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	language: false, device_id: false, device_name: false
};

export const settingsSlice = createSlice({
	name : 'settings',
	initialState,
	reducers: {
		setLanguage: (state, action) => {
			state.language = action.payload;
		}
		// setStatus: {
		// 	reducer(state, action) {
		// 		state.data = action.payload;
		// 		state.status.light = action.payload.light;
		// 	},
		// 	prepare(txt, type, data, light) {
		// 		//txt, type:[scan_id, scan_card, device], data, light:[error, scan_id, on, ok, loading]
		// 		return {
		// 			payload: { id: nanoid(), txt, type, data, light }
		// 		}
		// 	}
		// },
	}
});

export const { setLanguage } = settingsSlice.actions; 
export default settingsSlice.reducer;