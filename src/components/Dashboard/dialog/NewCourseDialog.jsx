import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { createNewCourse } from "./../../../redux/action/courses";

const NewCourseDialog = ({ showDialog, closeDialog }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [info, setInfo] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const data = new FormData();
      data.append("title", title);
      data.append("price", Number.parseInt(price));
      //daryefte YEK ax - az file haii ke entekhab shode index avalo begir
      data.append("imageUrl", event.target.imageUrl.files[0]);
      data.append("info", info);

      //dispatch
      dispatch(createNewCourse(data));
      closeDialog();
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
            />
            <input
              type='text'
              name='price'
              style={{ marginBottom: 3 }}
              className='form-control'
              placeholder='قیمت دوره (تومان)'
              aria-describedby='price'
              value={price}
            />
            <input
              type='file'
              name='imageUrl'
              style={{ marginBottom: 3 }}
              className='form-control mb-2'
              placeholder='قیمت دوره (تومان)'
              aria-describedby='imageUrl'
            />
            <textarea
              name='info'
              placeholder='توضیحات دوره'
              className='form-control'
              style={{ marginBottom: 3 }}
              value={info}
            />

            <button
              type='submit'
              className='btn btn-success'
              style={{ margin: "1em" }}
            >
              ثبت دوره
            </button>
            <button
              type='submit'
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
