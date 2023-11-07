import { db } from "../";
import { collection, query, where, getDocs, doc, addDoc, onSnapshot, orderBy, get } from "firebase/firestore";


export const getUserById = (user_id, callback) => {
    var docRef = db.collection("users").doc(user_id);
    docRef.get().then(function (doc) {
        callback({user_id: doc.id, ...doc.data()});
    });
};


export const getDeviceByTmpId = (tmp_id, callback) => {
    const docRef = db.collection('devices')
        .where('tmp_id', '==', tmp_id).get().then(querySnapshot => {
        if (querySnapshot.size == 0) {
            console.log('No matching documents.');
            callback(false);
        } else {
            console.log(querySnapshot.docs[0].data());
            callback(true);
        } 
    });
}

export const getLast6HoursClientCount = async (callback) => {
    const currentTime = new Date();
    const endTime = currentTime;
    const startTime = new Date(currentTime - 6 * 60 * 60 * 1000); 
    const q = query(
        collection(db, 'clients'),
        where('created', '>=', startTime),
        where('created', '<=', endTime)
    );

    return unsubscribe = onSnapshot(q, (snapshot) => {
        const results = {};
        results.data = [];
        const intervals = [];
        let intervalTime = new Date(startTime);
        while (intervalTime <= endTime) {
            intervals.push({
                start: new Date(intervalTime),
                end: new Date(intervalTime.getTime() + 15 * 60 * 1000),
                count: 0,
            });
            intervalTime = new Date(intervalTime.getTime() + 15 * 60 * 1000); // 15 minutes
        }

        let highest = 0;
        const data = snapshot.docs.map((doc) => {
           const timestamp = doc.data().created?.toDate(); // Check if the document exists
            if (timestamp) {
                for (const interval of intervals) {
                    if (timestamp >= interval.start && timestamp < interval.end) {
                        interval.count++;
                        if (interval.count > highest) {
                            highest = interval.count; 
                        }
                    }
                }
            }
        });
        results.data.push(...intervals.map((interval) => ({
            time: interval.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            clients: interval.count,
        })));
        results.highest = highest;
        results.data = results.data.reverse();
        callback(results);
    });
};


export const getEvents = async (callback) => {
    const q = collection(db, "events");
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.id);
      data.push(doc.data());
    });
    callback(data);
}

export const getUsers = async (callback) => {
    const q = query(collection(db, "clients"), orderBy("created", "desc"));
    return unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
            const entry = doc.data();
            return entry;
        });
        callback(data);
    });
}
