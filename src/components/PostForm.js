import React from 'react'

const PostForm = () => {
  return (
    <div className="post">
      <form className="post-form">
        <div className="post-form__group">
          <img
            src="/user-placeholder.png"
            alt="user avatar"
            className="post-form__avatar"
          />
          <textarea
            name="message"
            id="message"
            className="post-form__textarea"
          ></textarea>
        </div>
        <div className="post-form__group">
          <div className="post-form__control post-form__control--file">
            <label htmlFor="postFile" className="post-form__label">
              <span className="post-form__control--img">
                <img src="/add-photo.svg" alt="add a file" />
              </span>
              <input
                id="postFile"
                type="file"
                className="post-form__input--file"
              />
              <span>Photos / Videos</span>
            </label>
          </div>
          <div className="post-form__control post-form__control--tag">
            <span className="post-form__control--img">
              <img
                src="/user-select.svg"
                alt=""
                // className="post-form__control--img"
              />
            </span>
            <span>Tag</span>
          </div>
          <button type="submit" className="post-form__control--btn">
            <span>Post</span> <img src="/send.svg" alt="" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
