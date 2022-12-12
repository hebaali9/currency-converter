import "./logIn.css";

function LogIn() {
  return (
    <form>
      <div className="login-container">
        <h1>logIn</h1>
        <p className="text-form">LogIn To Your Account </p>

        <label htmlFor="email">Email </label>
        <input type="text" placeholder=""></input>

        <label htmlFor="password">password </label>
        <input type="password" placeholder=""></input>

        <button type="submit">logIn</button>
        <p>
          <a href="#">Forgot password</a>
        </p>
      </div>
    </form>
  );
}

export default LogIn;
