import { useContext, useRef, useState } from "react";
import { PostListContext } from "../store/Post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef();
  const tittleElement = useRef();
  const descriptionElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

  function getValues(evt) {
    evt.preventDefault();
    const userId = userIdElement.current.value;
    const tittle =tittleElement.current.value;
    const description = descriptionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;
    addPost(userId,tittle,description,tags,reactions);
  }
  return (
    <form
      className="create-post"
      onSubmit={getValues}
    >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Enter your userId here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tittle" className="form-label">
          Enter Tittle
        </label>
        <input
          type="text"
          className="form-control"
          id="tittle"
          ref={tittleElement}
          placeholder="Enter the post tittle"
        />
      </div>
      <label htmlFor="Description" className="form-label">
        Description
      </label>
      <textarea
        type="text"
        id="Description"
        ref={descriptionElement}
        className="form-control"
        aria-describedby="passwordHelpBlock"
        placeholder="tell us more...."
      />

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hash Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Enter tags by space"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="Enter Number of Reactions"
        />
      </div>

      <button className="btn btn-primary my-2">Post</button>
    </form>
  );
};

export default CreatePost;
