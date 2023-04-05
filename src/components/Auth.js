import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "../styles/Auth.scss";
import { Link } from "react-router-dom";

export const Auth = (props) => {
	const [firstName, setFirstName] = useState("");
	const [isUserVerified, setIsUserVerified] = useState(false);

	const signInWithGoogle = async () => {
		await signInWithPopup(auth, googleProvider)
			.then((result) => {
				const fullName = result.user.displayName.split(" ");
				const newFirstName = fullName[0];
				setFirstName(newFirstName);

				if (result.user.emailVerified === "true") {
					setIsUserVerified("true");
				}
				props.onFirstNameChange(newFirstName);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<section className="auth">
			{isUserVerified ? (
				<Link
					to={"/library"}
					className="auth__button"
					onClick={signInWithGoogle}
				>
					Sign in with <span className="auth__button-google">Google</span>
				</Link>
			) : (
				<button className="auth__button" onClick={signInWithGoogle}>
					Sign in with <span className="auth__button-google">Google</span>
				</button>
			)}
		</section>
	);
};
