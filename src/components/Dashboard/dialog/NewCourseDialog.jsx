import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { createNewCourse } from "./../../../redux/action/courses";
import { dashboardContext } from "./../../../context/dashboardContext";

const NewCourseDialog = ({ showDialog, closeDialog }) => {
     const context = useContext(dashboardContext);
     const { validator } = context;

     const dispatch = useDispatch();

     const [title, setTitle] = useState();
     const [price, setPrice] = useState();
     const [info, setInfo] = useState();
     // e20.7
     const [imageUrl, setImageUrl] = useState();
     const [, forceUpdate] = useState();

     const handleSubmit = (event) => {
          event.preventDefault();

          try {
               if (validator.current.allValid()) {
                    let data = new FormData();
                    data.append("title", title);
                    data.append("price", Number.parseInt(price));
                    //daryefte YEK ax - az file haii ke entekhab shode index avalo begir
                    data.append("imageUrl", event.target.imageUrl.files[0]);
                    data.append("info", info);

                    //dispatch
                    dispatch(createNewCourse(data));
                    closeDialog();
               } else {
                    validator.current.showMessages();
                    forceUpdate(1);
               }
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <DialogOverlay
               isOpen={showDialog}
               onDismiss={closeDialog}
               style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
          >
               <DialogContent
                    aria-label='Announcement'
                    style={{
                         border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                         borderRadius: "10px",
                         boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                    }}
               >
                    <div className='inner form-layer'>
                         <form onSubmit={handleSubmit}>
                              <input
                                   type='text'
                                   name='title'
                                   style={{ marginBottom: 3 }}
                                   className='form-control'
                                   placeholder='عنوان دوره'
                                   aria-describedby='title'
                                   value={title}
                                   onChange={(event) => {
                                        setTitle(event.target.value);
                                        validator.current.showMessageFor(
                                             "title"
                                        );
                                   }}
                              />
                              {validator.current.message(
                                   "title",
                                   title,
                                   "required|min:5"
                              )}

                              <input
                                   type='text'
                                   name='price'
                                   style={{ marginBottom: 3 }}
                                   className='form-control'
                                   placeholder='قیمت دوره (تومان)'
                                   aria-describedby='price'
                                   value={price}
                                   onChange={(event) => {
                                        setPrice(event.target.value);
                                        validator.current.showMessageFor(
                                             "price"
                                        );
                                   }}
                              />
                              {validator.current.message(
                                   "price",
                                   price,
                                   "required|integer"
                              )}

                              {/* e20.7 // in input chon az noe file niaz be value nadare */}
                              <input
                                   type='file'
                                   name='imageUrl'
                                   style={{ marginBottom: 3 }}
                                   className='form-control mb-2'
                                   placeholder='قیمت دوره (تومان)'
                                   aria-describedby='imageUrl'
                                   onChange={(event) => {
                                        setImageUrl(true);
                                        validator.current.showMessageFor(
                                             "imageUrl"
                                        );
                                   }}
                              />
                              {validator.current.message(
                                   "imageUrl",
                                   imageUrl,
                                   "required"
                              )}

                              <textarea
                                   name='info'
                                   placeholder='توضیحات دوره'
                                   className='form-control'
                                   style={{ marginBottom: 3 }}
                                   value={info}
                                   onChange={(event) => {
                                        setInfo(event.target.value);
                                        validator.current.showMessageFor("info");
                                   }}
                              />
                              {validator.current.message(
                                   "info",
                                   info,
                                   "required"
                              )}

                              <button
                                   type='submit'
                                   className='btn btn-success'
                                   style={{ margin: "1em" }}
                              >
                                   ثبت دوره
                              </button>
                              <button
                                   className='btn btn-warning mr-5'
                                   style={{ margin: "1em" }}
                                   onsubmit={closeDialog}
                              >
                                   انصراف
                              </button>
                         </form>
                    </div>
               </DialogContent>
          </DialogOverlay>
     );
};

export default NewCourseDialog;
