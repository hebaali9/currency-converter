export const Update_Token_Action = function (token: string) {
  return {
    type: "UPDATE_THE_TOKEN",
    payload: token,
  };
};
