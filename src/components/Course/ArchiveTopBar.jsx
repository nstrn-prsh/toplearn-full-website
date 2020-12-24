import React from "react";

const ArchiveTopBar = ({courseNums}) => {
  return (
    <div className='top-bar'>
      <header>
        <h1>
          {" "}
          دوره های <span> برنامه نویسی وب </span>{" "}
        </h1>{" "}
        <span> {courseNums} دوره </span>
      </header>

      <div className='row'>
        <div className='col-md-4 col-sm-12 col-xs-12 pull-right'>
          <form action='' method=''>
            <div className='input'>
              <input type='text' name='' placeholder='موضوع مورد نظر ...' />
              <button>
                <i className='zmdi zmdi-search'></i>
              </button>
            </div>
          </form>
        </div>
        <div className='col-md-4 col-sm-6 col-xs-12 pull-right'>
          <div className='switch-field available'>
            <input
              id='available-filter-1'
              name='available'
              value='all'
              checked=''
              type='radio'
            />
            <label for='available-filter-1'> همه </label>
            <input
              id='available-filter-2'
              name='available'
              value='off'
              type='radio'
            />
            <label for='available-filter-2'> خریدنی </label>
            <input
              id='available-filter-3'
              name='available'
              value='normal'
              type='radio'
            />
            <label for='available-filter-3'> رایگان </label>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xs-12 pull-left'>
          <div className='select-ddl'>
            <select>
              <option> مرتب سازی </option>
              <option> قیمت </option>
              <option> مدرت زمان دوره </option>
              <option> تاریخ انتشار </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveTopBar;
