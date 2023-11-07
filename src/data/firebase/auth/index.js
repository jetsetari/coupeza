import { auth, db } from "../";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, doc, addDoc } from "firebase/firestore";

// Sign Up
export const doCreateUserWithEmailAndPassword = async (email, password, data, callback) => {
  const q = query(collection(db, "companies"), where("code", "==", data.company));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size == 0) {
      callback({type: 'error', data: "Company code is not correct"});
  } else {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      data.company = querySnapshot.docs[0].id;
      const users = collection(db, "users")
      addDoc(users, data).then(docRef => {
        doSignInWithEmailAndPassword(email, password, (response) => {
          callback(response);
        });
        callback({type: 'success', data: data});
      }).catch(error => {
        callback({type: 'error', data: error});
      })
    }).catch((error) => {
      if (error.code == "auth/weak-password") {
        callback({type: 'error', data: "Weak Password!"});
      } else {
        callback({type: 'error', data: error.message});
      }
    });
  }
}
  

// Sign In
export function doSignInWithEmailAndPassword(email, password, callback) {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      callback({type: 'success', data: result.user.uid});
    })
    .catch((error) => {
      callback({type: 'error', data: error});
    });
}

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export function doPasswordReset(email, callback) {
  auth
    .sendPasswordResetEmail(email)
    .then((result) => {
      if (callback) callback(result);
    })
    .catch((error) => {
      console.error("login error", error);
      //if (callback) callback("error", error);
    });
}

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
