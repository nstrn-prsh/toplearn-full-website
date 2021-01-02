import React from "react";

const Dashboard = ({ courses }) => {
  return (
    <div className='container-fluid' style={{ marginTop: "5em" }}>
      <div className='row'>
        <div className='col-log-3 col-md-6'>
          <div className='panel panel-primary'>
            <div className='panel-heading'>
              <div className='row'>
                <div className='col-xs-3'>
                  <i className='fa fa-graduation-cap fa-5x'></i>
                </div>
                <div className='col-xs-9 text-left'>
                  <div className='huge'>{courses.length}</div>
                  <div>تعداد دوره ها</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
          <div className='alert-info alert text-center'>
              خوش آمدید.
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
