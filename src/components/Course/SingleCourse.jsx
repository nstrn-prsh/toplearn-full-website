import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comments from "./../Common/Comments";
import SingleMain from "./SingleMain";
import SingleRightBar from "./SingleRightBar";
import { getSingleCourse } from "./../../redux/action/singleCourse";

const SingleCourse = ({ match }) => {
  const course = useSelector((state) => state.singleCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCourse(match.params.id));
  }, []);

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
