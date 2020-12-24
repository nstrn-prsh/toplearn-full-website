import React from "react";

const SingleMain = ({courseMain}) => {
  return (
    <section className='term-description'>
      <img src={`https://toplearnapi.ghorbany.dev/${courseMain.imageUrl}`} alt='tl' />
      <p>
        {courseMain.info}
      </p>

      <h2> سرفصل های این دوره : </h2>
      <ul>
        <li>
          {" "}
          <h3> معرفی این دوره </h3> <i> رایگان </i> <span>00:15:12</span>
        </li>
        <li>
          {" "}
          <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{" "}
          <span>01:15:12</span>
        </li>
        <li>
          {" "}
          <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>{" "}
          <span>02:05:12</span>
        </li>
        <li>
          {" "}
          <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>{" "}
          <span>00:10:12</span>
        </li>
        <li>
          {" "}
          <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{" "}
          <span>01:15:12</span>
        </li>
        <li>
          {" "}
          <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>{" "}
          <span>02:05:12</span>
        </li>
        <li>
          {" "}
          <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>{" "}
          <span>00:10:12</span>
        </li>
        <li>
          {" "}
          <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>{" "}
          <span>01:15:12</span>
        </li>
      </ul>
    </section>
  );
};

export default SingleMain;
