import _Lo from "lodash";

export const paginate = (courseS, currentPage, coursePerPage) => {
  const startIndex = (currentPage - 1) * coursePerPage;
  // lodash object
  return _Lo(courseS)
                .slice(startIndex)
                .take(coursePerPage)
                .value();
};
