import React from "react";
import { Link } from "react-router-dom";

const AdminTopNav = ({ user }) => {
     return (
          <ul className='nav navbar-left top-nav'>
               <li className='dropdown'>
                    <a
                         href='google.com'
                         className='dropdown-toggle'
                         data-toggle='dropdown'
                    >
                         <span>
                              <i className='fa fa-user'></i> {user.fullname}
                         </span>
                    </a>
                    <ul className='dropdown-menu'>
                         <li>
                              <Link to='/user-profile'>
                                   <span>
                                        <i className='fa fa-fw fa-user'></i>{" "}
                                        پروفایل
                                   </span>
                              </Link>
                         </li>
                         <li>
                              <Link to='/'>
                                   <span>
                                        <i className='fa fa-fw fa-eye'></i>{" "}
                                        مشاهده سایت
                                   </span>
                              </Link>
                         </li>
                         <li className='divider'>
                              <li>
                                   <Link to='/logout'>
                                        <span>
                                             <i className='fa fa-fw fa-power-off'></i>{" "}
                                             خروج
                                        </span>
                                   </Link>
                              </li>
                         </li>
                    </ul>
               </li>
          </ul>
     );
};

export default AdminTopNav;
