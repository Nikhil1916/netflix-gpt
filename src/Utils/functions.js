import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { options } from "./constants";

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