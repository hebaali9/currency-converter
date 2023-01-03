function UPDATE_TOKEN_ACTION(token: string) {
  return {
    type: "UPDATE_TOKEN",
    payload: token,
  };
}
export default UPDATE_TOKEN_ACTION;
