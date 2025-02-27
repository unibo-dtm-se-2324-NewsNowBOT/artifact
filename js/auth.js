import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// get Firestore instance
const db = getFirestore();

export async function registerUser(email, password, role) {
    try {
        // Crea l'utente con email e password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Verifica che l'utente sia stato creato
        if (userCredential && userCredential.user) {
            const user = userCredential.user;

            // Salva il ruolo dell'utente in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                role: role
            });

            // Successo
            console.log("User registered successfully!");
            return user;  // Restituisce l'utente registrato
        } else {
            throw new Error("User creation failed");
        }
    } catch (error) {
        console.error("Error during user registration:", error);
        throw error;  // Propaga l'errore al chiamante
    }
}


// login funtion
export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// logout function
export function logoutUser() {
    return signOut(auth);
}

// function to get user's role
export async function getUserRole(uid) {
    const userDoc = await getDoc(doc(db, "users", uid));
    
    if (userDoc.exists()) {
        return userDoc.data().role; // "user" or "admin"
    } else {
        return null;
    }
}


