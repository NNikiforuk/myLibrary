import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.scss";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		await signInWithPopup(auth, googleProvider)
			.then((result) => {
				navigate("/library");
				sessionStorage.setItem(
					"Auth Token",
					result._tokenResponse.refreshToken
				);
			})

			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<section className="auth">
			<button className="auth__button" onClick={signInWithGoogle}>
				Sign in with <span className="auth__button-google">Google</span>
			</button>
		</section>
	);
};
