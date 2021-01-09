import React, { setState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { handleCourseEdit } from './../../../redux/action/courses';

const EditCourseDialog = ({ course, showDialog, closeDialog }) => {
  const dispatch = useDispatch();

  const [courseId, setCourseId] = setState();
  const [title, setTitle] = setState();
  const [price, setPrice] = setState();
  const [imageUrl, setImageUrl] = setState();
  const [info, setInfo] = setState();

  useEffect(() => {
    //   age arguman course meghdar dasht,
    // state ha ba on meghdar populate mishan
    // vaghti component unmount shod, state ha clear mishan (to return)
    setCourseId(course._id);
    setTitle(course.title);
    setPrice(course.price);
    setImageUrl(course.imageUrl);
    setInfo(course.info);
    return () => {
      setCourseId();
      setTitle();
      setPrice();
      setImageUrl();
      setInfo();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData();
    data.append("title", title);
    // data.append("price", price);
    data.append("price", Number.parseInt(price));
    if (event.target.imageUrl.files[0])
      data.append("imageUrl", event.target.imageUrl.files[0]);
    else data.append("imageUrl", imageUrl);
    data.append("info", info);
    // action
    dispatch(handleCourseEdit(courseId, data));
    closeDialog();
  };

  return (
    <DialogOverlay
      isOpen={showDialog}
      onDismiss={closeDialog}
      style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
    >
      <DialogContent
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
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type='text'
              name='price'
              style={{ marginBottom: 3 }}
              className='form-control'
              placeholder='قیمت دوره به تومان'
              aria-describedby='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type='file'
              name='imageUrl'
              style={{ marginBottom: 3 }}
              className='form-control mb-2'
              aria-describedby='imageUrl'
            />

            <textarea
              name='info'
              placeholder='توضیحات دوره'
              className='form-control'
              style={{ marginBottom: 3 }}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />

            <button
              type='submit'
              className='btn btn-success '
              style={{ margin: "1em" }}
            >
              ویرایش دوره
            </button>

            <button
              className='btn btn-warning mr-5'
              style={{ margin: "1em" }}
              onClick={closeDialog}
            >
              انصراف
            </button>
          </form>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default EditCourseDialog;
