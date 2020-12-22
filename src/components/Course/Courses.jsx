import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Courses = ({ someCourses }) => {
  return (
    <Fragment>
      <section className='terms-items'>
        <header>
          <h2> آخرین دوره های تاپ لرن </h2>
          <Link to='/archive'> مشاهده همه دوره ها </Link>
        </header>
        <div className='row'>
          {/* maghadir az samte server mian */}
          {someCourses.map((course) => (
            <div
              key={course._id}
              className='col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col'
            >
              <article>
                <Link to={`/singleCourse/${course._id}`} className='img-layer'>
                  <img
                    src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                    alt='tl'
                  />
                </Link>
                <h2>
                  <Link to={`/singleCourse/${course._id}`}>
                    {" "}
                    {course.title}{" "}
                  </Link>
                </h2>
                <span> رایگان </span>
                <i>1:52:32</i>
              </article>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Courses;
