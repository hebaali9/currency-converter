function SET_LOGGED_IN(loggedIn: Boolean) {
  return {
    type: "SET_ISLOGGED_IN",
    payload: loggedIn,
  };
}
export default SET_LOGGED_IN;
