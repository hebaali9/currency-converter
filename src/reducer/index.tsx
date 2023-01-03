type ActionType =
  | {
      type: string;
      payload: any;
    }
  | any;

export function reducer(state = { token: "" }, action: ActionType) {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
