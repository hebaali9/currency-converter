type ActionType =
  | {
      type: string;
      payload: any;
    }
  | any;

export function reducer(state = { loggedIn: false }, action: ActionType) {
  switch (action.type) {
    case "SET_ISLOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
}
