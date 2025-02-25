
import { auth } from "./firebase-config.js";
import { createUser, signIn, signOut } from "firebase/auth";

export function registerUser(email, password) {
    return createUser(auth, email, password);
}

export function loginUser(email, password) {
    return signIn(auth, email, password);
}

export function logoutUser() {
    return signOut(auth);
}