import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card" style={{ width: "18rem", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => {
          return (
            <span key={tag} className="badge text-bg-primary mx-1">
              {tag}
            </span>
          );
        })}
        <span className="reactions">
          <FaRegHeart />
          <span>{post.reactions}</span>
        </span>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>{deletePost(post.id)}}
        >
          <MdDelete />
        </span>
      </div>
    </div>
  );
};
export default Post;
