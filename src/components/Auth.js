import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "../styles/Auth.css";

export const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="auth">
			<div className="auth-email">
				<input
					type="email"
					placeholder="Email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password..."
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="emailBtn" onClick={signIn}>
					Sign in
				</button>
			</div>
			<p>or</p>
			<div className="auth-google">
				<button className="googleBtn" onClick={signInWithGoogle}>
					Sign in with Google
				</button>
			</div>
		</div>
	);
};
