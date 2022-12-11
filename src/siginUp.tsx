import "./signUp.css";

function SignUp() {
  return (
    <form>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <p className="text-form">
          Please fill in this form to create an account.
        </p>

        <label htmlFor="fName">First Name </label>
        <input type="text" placeholder=""></input>

        <label htmlFor="lName">Last Name </label>
        <input type="text" placeholder=""></input>
        <label htmlFor="email">Email </label>
        <input type="text" placeholder=""></input>

        <label htmlFor="password">password </label>
        <input type="password" placeholder=""></input>

        <button type="submit">Sign Up</button>
        <p>
          already have an account <a href="#">login</a>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
