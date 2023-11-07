import { db } from "../";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

export const activateDevice = async (tmp_id, callback)  =>  {
    const q = query(collection(db, "devices"), where("tmp_id", "==", tmp_id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size == 0) {
        console.log('No matching documents.');
        callback(false);
    } else {
        let id = querySnapshot.docs[0].id;
        const docRef = doc(db, "devices", id);
        updateDoc(docRef, {connected: true}).then(docRef => {
            callback(querySnapshot.docs[0].id);
        })
        .catch(error => {
            callback(error);
        })
    } 
}

export const updateDeviceName = (device_id, device_name) => {
    const docRef = doc(db, "devices", device_id);
    updateDoc(docRef, {name: device_name}).then(docRef => {
        callback(querySnapshot.docs[0].id);
    })
    .catch(error => {
        callback(error);
    })
}