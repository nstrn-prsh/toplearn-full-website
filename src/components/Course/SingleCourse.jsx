import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Comments from "./../Common/Comments";
import SingleMain from "./SingleMain";
import SingleRightBar from "./SingleRightBar";
import { getSingleCourse } from "./../../redux/action/singleCourse";
import { idValidator } from "./../../utils/idValidator";

const SingleCourse = ({ match }) => {
  const course = useSelector((state) => state.singleCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    if (idValidator(match.params.id))
      return dispatch(getSingleCourse(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!idValidator(match.params.id)) return <Redirect to='/page404' />;

  return (
    <div className='container'>
      <section className='term-content'>
        <header>
          <h1> {course.title} </h1>
        </header>
        <div className='row'>
          <div className='col-md-8 col-sm-12 col-xs-12 pull-left'>
            <SingleMain courseMain={course} />
            <Comments />
          </div>
          <SingleRightBar courseRight={course} />
        </div>
      </section>
    </div>
  );
};

export default SingleCourse;
