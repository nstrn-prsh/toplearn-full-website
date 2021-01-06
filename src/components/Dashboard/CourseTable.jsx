import React, { useContext } from "react";
import { dashboardContext } from "./../../context/dashboardContext";
import Pagination from "./../Common/Pagination";

const CourseTable = () => {
  const context = useContext(dashboardContext);
  const {
    currentPage,
    coursePerPage,
    allCourses,
    handlePageChange,
    openNewCourseDialog,
  } = context;

  return (
    <section style={{ margin: "4em" }}>
      <div>
        <div>
          <h3 className='alert alert-info text-center'>لیست دوره ها</h3>
          <div className='row inline-block'>
            <button className='btn btn-primary' onClick={openNewCourseDialog}>
              <span
                className='fa fa-plus'
                style={{ verticalAlign: "middle", marginLeft: "1em" }}
              ></span>
              اضافه کردن دوره جدید
            </button>
            <input
              type='text'
              placeholder='جست و جوی دوره'
              className='form-control'
              style={{ width: "50%", float: "left", marginLeft: "2em" }}
            />
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>
                  <td>عنوان دوره</td>
                </th>
                <th scope='col'>
                  <td>تصویر دوره</td>
                </th>
                <th scope='col'>
                  <td>قیمت دوره (تومان)</td>
                </th>
                <th scope='col'>
                  <td>ویرایش</td>
                </th>
                <th scope='col'>
                  <td>حذف</td>
                </th>
              </tr>
            </thead>
            <tbody>
              {allCourses.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>
                  <td>
                    <a
                      href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                      target='_blank'
                      className='btn btn-info btn-sm'
                    >
                      نمایش تصویر
                    </a>
                  </td>
                  <td>{course.price === 0 ? "رایگان" : `${course.price}`}</td>
                  <td>
                    <button className='btn btn-warning'>ویرایش</button>
                  </td>
                  <td>
                    <button className='btn btn-danger'>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='navbar-fixed-bottom text-center footer'>
          <Pagination
            totalCourses={allCourses.length}
            perPage={coursePerPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseTable;
