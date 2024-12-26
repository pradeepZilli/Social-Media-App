import Post from "./Post";
import { PostListContext } from "../store/Post-list-store";
import { useContext } from "react";
const PostList = () => {
  const { postList } = useContext(PostListContext);
 
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
};
export default PostList;
