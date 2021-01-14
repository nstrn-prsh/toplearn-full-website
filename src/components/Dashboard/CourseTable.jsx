import React, { useContext } from "react";
import { dashboardContext } from "./../../context/dashboardContext";
import Pagination from "./../Common/Pagination";

const CourseTable = () => {
  const {
    currentPage,
    coursePerPage,
    allCourses,
    handlePageChange,
    openNewCourseDialog,
    openEditCourseDialog,
    openDeleteCourseDialog,
    setSearch,
    filteredCourses,
    sortCoursesAsc,
    sortCoursesDes,
  } = useContext(dashboardContext);

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
              onClick={(event) => setSearch(event.target.value.toLowerCase())}
            />
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>عنوان دوره</th>
                <th scope='col'>تصویر دوره</th>
                <th scope='col'>
                  قیمت دوره (تومان)
                  <span
                    className='fa fa-long-arrow-up'
                    style={{ marginRight: "0.5em" }}
                    onClick={sortCoursesAsc}
                  ></span>
                  <span
                    className='fa fa-long-arrow-down'
                    style={{ marginRight: "0.5em" }}
                    onClick={sortCoursesDes}
                  ></span>
                </th>
                <th scope='col'>ویرایش</th>
                <th scope='col'>حذف</th>
              </tr>
            </thead>
            <tbody>
              {allCourses.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>
                  <td>
                    <a
                      href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                      // target='_blank'
                      className='btn btn-info btn-sm'
                    >
                      نمایش تصویر
                    </a>
                  </td>
                  <td>{course.price === 0 ? "رایگان" : `${course.price}`}</td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => openEditCourseDialog(course)}
                    >
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => openDeleteCourseDialog(course)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='navbar-fixed-bottom text-center footer'>
          <Pagination
            totalCourses={filteredCourses.length}
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
