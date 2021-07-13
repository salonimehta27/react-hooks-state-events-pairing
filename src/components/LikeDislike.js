

function LikeDislike({ upvotes, downvotes, onUpvote, onDownvote }) {
    return <>
        <button onClick={onUpvote}>{upvotes} 👍</button> <button onClick={onDownvote}>{downvotes} 👎</button>
    </>
}
export default LikeDislike