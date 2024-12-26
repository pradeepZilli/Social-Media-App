import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducerPostList = (postList, action) => {
  let newPostList = postList;
  if (action.type === "DELETE") {
    newPostList = postList.filter((post) => {
      return post.id != action.postId;
    });
  } else if (action.type === "ADD") {
    console.log(action);

    newPostList = [action.payload, ...postList];
  }
  return newPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, DispatchPostList] = useReducer(
    reducerPostList,
    []
  );
  const addPost = (userId, tittle, description, tags, reactions) => {
    console.log("post added");
    DispatchPostList({
      type: "ADD",
      payload: {
        id: Date.now(),
        title: tittle,
        body: description,
        reactions: reactions,
        userid: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    DispatchPostList({ type: "DELETE", postId: postId });
    console.log(`deleted post id=${postId}`);
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POSTS = [
  {
    id: 1,
    title: "going to mumbai",
    body: "hello freinds I am going to mumbai",
    reactions: 10,
    userid: "user1",
    tags: ["mumbai", "enjoy"],
  },
  {
    id: 2,
    title: "going to mumbai",
    body: "hello freinds I am going to mumbai",
    reactions: 0,
    userid: "user2",
    tags: ["mumbai", "enjoy"],
  },
];

export default PostListContextProvider;
