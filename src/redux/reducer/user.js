export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    // vaghti user log out mishe bayad state az user pak beshe
    case "CLEAR_USER":
      return { ...action.payload };
    default:
      return state;
  }
};
