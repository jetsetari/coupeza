import { auth, db } from "../";
import { collection, query, where, getDocs, doc, addDoc } from "firebase/firestore";


export const createEvent = (data, callback) => {
	const events = collection(db, "events")
	addDoc(events, data).then(docRef => {
		callback({type: 'success', data: data});
	}).catch(error => {
		callback({type: 'error', data: error});
	})
}