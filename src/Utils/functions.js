import { auth, provider } from "./firebase";
import { options } from "./constants";
import { signOut, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });     
}

export const fetchMovie = async (page = 1, movie) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?page=${page}&query=${movie}&include_adult=false`,
    options
  );
  const json = await data?.json();
  return json;
};

export const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
