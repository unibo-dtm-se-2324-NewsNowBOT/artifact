import { initializeApp } from "firebase/app";
		import { getAuth } from "firebase/auth";
	

		// Initialize Firebase
		const firebaseConfig = {
			apiKey: "AIzaSyA6Z_i3XpQALVRiGI1VmpfB8fCRA3nSd3w",
			authDomain: "newsnowbot-ff10b.firebaseapp.com",
			projectId: "newsnowbot-ff10b",
			storageBucket: "newsnowbot-ff10b.firebasestorage.app",
			messagingSenderId: "769285740218",
			appId: "1:769285740218:web:a0c85e8136443e7ea55483",
			measurementId: "G-F2QDHYV35D"
		};
		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		export const auth = getAuth(app);