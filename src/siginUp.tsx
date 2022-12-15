import "./signUp.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9TwYOlGC-i61SDmRdYMTnBlhQkGWKt84",
  authDomain: "currencyproject-2f7ff.firebaseapp.com",
  databaseURL: "https://currencyproject-2f7ff-default-rtdb.firebaseio.com",
  projectId: "currencyproject-2f7ff",
  storageBucket: "currencyproject-2f7ff.appspot.com",
  messagingSenderId: "627025741672",
  appId: "1:627025741672:web:a7f06c8725e1a66f4d78dd",
  measurementId: "G-R46CJPS3MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
var FName;
var LName;
var Email;
var Password;
var signUp;

function addingData(): void {
  FName = document.getElementById("FName") as HTMLInputElement;
  LName = document.getElementById("LName") as HTMLInputElement;
  Email = document.getElementById("Email") as HTMLInputElement;
  Password = document.getElementById("Password") as HTMLInputElement;
  set(ref(db, "user" + FName.value), {
    user_FName: FName ? FName.value : "",
    user_lName: LName ? LName.value : "",
    user_Email: Email ? Email.value : "",
    user_Password: Password ? Password.value : "",
  })
    .then(() => {
      alert("done");
    })
    .catch((error) => {
      alert("error");
    });
  signUp = document.getElementById("signUp") as HTMLInputElement;
  signUp.addEventListener("click", addingData);
}

function SignUp() {
  return (
    <form>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <p className="text-form">
          Please fill in this form to create an account.
        </p>

        <label htmlFor="fName">First Name </label>
        <input type="text" name="FName" id="FName" placeholder=""></input>

        <label htmlFor="lName">Last Name </label>
        <input type="text" name="LName" id="LName" placeholder=""></input>
        <label htmlFor="email">Email </label>
        <input type="text" name="Email" id="Email" placeholder=""></input>

        <label htmlFor="password">password </label>
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder=""
        ></input>

        <button type="submit" name="signUp" id="signUp" onClick={heba}>
          Sign Up
        </button>
        <p>
          already have an account <a href="#">login</a>
        </p>
      </div>
    </form>
  );
}
function heba() {
  console.log("duha  ", document.getElementById("FName"));
  addingData();
}

export default SignUp;
