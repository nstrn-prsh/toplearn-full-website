import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { paginate } from "./../../utils/paginate";
import ArchiveTopBar from "./ArchiveTopBar";
import ArchiveRightBar from "./ArchiveRightBar";
import Courses from "./Courses";
import Pagination from "./../Common/Pagination";

const Archive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(8);
  const courseS = useSelector((state) => state.courses);

  const allCourses = paginate(courseS, currentPage, coursePerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>تاپلرن|لیست دوره ها</title>
      </Helmet>

      <div className='container'>
        <section className='term-categories'>
          <ArchiveTopBar courseNums={courseS.length} />

          <div className='row'>
            <ArchiveRightBar />

            <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
              <section className='terms-items'>
                <div className='row'>
                  <Courses someCourses={allCourses} />
                </div>

                <Pagination
                  totalCourses={courseS.length}
                  perPage={coursePerPage}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
              </section>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Archive;
