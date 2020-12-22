// spread operators dar object ha key haro update mikone
// pas niazi nist ke clear course dashte bashim
// chon har moghe get-course anjam mishe , ghblie update mishe
export const singleCoursesReducer = (state = {}, action) => {
  switch (action.type) {
    // daryafte dore az server
    case "GET_COURSE":
      return { ...action.payload };
    default:
      return state;
  }
};
