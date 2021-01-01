export const idValidator = (courseId) => {
  const reg = new RegExp("^[0-9a-fA-F{24}$]");
  return reg.test(courseId);
};
