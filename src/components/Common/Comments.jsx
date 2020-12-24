import React from "react";

const Comments = () => {
  return (
    <section className='user-comments'>
      <header>
        <h3> نظرات کاربران </h3>
      </header>
      <div className='inner'>
        <form>
          <div className='row'>
            <div className='col-md-4 col-sm-12 col-xs-12'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='نام و نام خانوادگی'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='ایمیل'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='شماره تماس'
                />
              </div>
            </div>
            <div className='col-md-8 col-sm-12 col-xs-12'>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  placeholder='متن نظر'
                ></textarea>
              </div>
              <div className='row'>
                <div className='col-md-8 col-sm-7 col-xs-7'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='کد امنیتی'
                    />
                  </div>
                </div>
                <div className='col-md-4 col-sm-5 col-xs-5'>
                  <img src='./../../../public/images/captcha.jpg' alt='tl' />
                </div>
              </div>
            </div>
            <div className='col-xs-12'>
              <button type='submit' className='btn btn-success'>
                {" "}
                ثبت دیدگاه{" "}
              </button>
            </div>
          </div>
        </form>

        <div className='comment-list'>
          <div className='comment-row'>
            <img src='./../../../public/images/pic/avatar.jpg' alt='tl' />
            <div className='left-col'>
              <h3> میترا رحیمی </h3>
              <span>12/03/1397</span>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

          <div className='comment-row'>
            <img src='./../../../public/images/pic/avatar.jpg' alt='tl' />
            <div className='left-col'>
              <h3> میترا رحیمی </h3>
              <span>12/03/1397</span>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

          <div className='comment-row'>
            <img src='./../../../public/images/pic/avatar.jpg' alt='tl' />
            <div className='left-col'>
              <h3> میترا رحیمی </h3>
              <span>12/03/1397</span>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

          <div className='comment-row'>
            <img src='./../../../public/images/pic/avatar.jpg' alt='tl' />
            <div className='left-col'>
              <h3> میترا رحیمی </h3>
              <span>12/03/1397</span>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comments;
