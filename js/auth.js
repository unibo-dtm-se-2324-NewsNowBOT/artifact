import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// get Firestore instance
const db = getFirestore();

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

export async function registerUser(name, surname, email, password, role) {
    try {
        /// Check if the email is valid
        if (!isValidEmail(email)) {
            throw new Error("Invalid email format");
        }

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Verify that the user has been created
        if (userCredential && userCredential.user) {
            const user = userCredential.user;

            // Save user data in Firestore (name, surname, email and role)
            await setDoc(doc(db, "users", user.uid), {
                name: name,          
                surname: surname,    
                email: user.email, 
                role: role
            });

            // Success
            console.log("User registered successfully!");
            return user;  // Returns the registered user
        } else {
            throw new Error("User creation failed");
        }
    } catch (error) {
        console.error("Error during user registration:", error.message);
        throw error;
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

  export function checkUserStatus(userCallback) {
      // Firebase listener to update user's state
      onAuthStateChanged(auth, (user) => {
          userCallback(user);  
      });
  }
