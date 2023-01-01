import "./signUp.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { signUp, db } from "./firebase";
import { ref, set } from "firebase/database";
import { Update_Token_Action } from "./action";
import { useNavigate } from "react-router-dom";
import { store } from "./store";

function SignUp() {
  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = store.getState().token;

  function handelSubmit(e: React.FormEvent) {
    ``;
    e.preventDefault();

    signUp(email, password)
      .then((userCredintials) => {
        //console.log(userCredintials.user.email); i kept them for a reason
        storeUserInfo(userCredintials.user.uid, { fName, lName });
        //setToken(userCredintials.user.accessToken); i kept them for a reason

        // @ts-ignore
        store.dispatch(Update_Token_Action(userCredintials.user.accessToken));
        navigate("/currenctPage");
      })
      .catch(() => {});

    function storeUserInfo(
      userId: string,
      data: { fName: string; lName: string }
    ) {
      const query = ref(db, "users" + "/" + userId);
      set(query, data);
    }
  }
  return (
    <>
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
      <form onSubmit={handelSubmit}>
        <div className="signup-container">
          <h1>Sign Up</h1>
          <p className="text-form">
            Please fill in this form to create an account.
          </p>

          <label htmlFor="fName">First Name </label>
          <input
            type="text"
            name="FName"
            placeholder=""
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          ></input>

          <label htmlFor="lName">Last Name </label>
          <input
            type="text"
            name="LName"
            placeholder=""
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          ></input>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="Email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="password">password </label>
          <input
            type="password"
            name="Password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" name="signUp" id="signUp">
            Sign Up
          </button>
          <p>
            already have an account <a href="#">login</a>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignUp;
