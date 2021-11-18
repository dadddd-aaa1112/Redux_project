export default function (state = null, action) {
  switch (action.type) {
    case "City_slected":
      return action.payload;
      break;

    default:
      return state;
  }
}
