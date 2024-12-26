import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListContextProvider from "./store/Post-list-store";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
