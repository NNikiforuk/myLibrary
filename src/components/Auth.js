import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "../styles/Auth.scss";

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
		<section className="container">
			<div className="auth">
				<div className="form">
					<input
						className="form__input"
						type="email"
						placeholder="Email..."
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="form__input"
						type="password"
						placeholder="Password..."
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="form__button" onClick={signIn}>
						Sign in
					</button>
				</div>
			</div>
			<div className="google">
				<p className="google__paragraph">or</p>
				<div className="google__auth">
					<button className="google__button" onClick={signInWithGoogle}>
						Sign in with Google
					</button>
				</div>
			</div>
		</section>
	);
};
