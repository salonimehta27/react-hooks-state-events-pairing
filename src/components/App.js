import video from "../data/video.js";
import Comments from "./Comments"
import LikeDislike from "./LikeDislike"
import { useState } from "react"

function App() {
  //console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  function handleHideComments() {
    setShowComments(!showComments)
  }

  function handleUpvotes() {
    return setUpvotes(upvotes + 1)
  }
  function handleDownvotes() {
    return setDownvotes(downvotes + 1)
  }
  return (
    <div className="App">
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <LikeDislike upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvotes}
        onDownvote={handleDownvotes}
      ></LikeDislike>
      <div>
        <br />
        <button onClick={handleHideComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      </div>
      ____________________________________________________________________________________________________________________
      {showComments ? <Comments comments={video.comments} hideComments={handleHideComments} showComments={showComments}></Comments> : null}

    </div>
  );
}

export default App;
