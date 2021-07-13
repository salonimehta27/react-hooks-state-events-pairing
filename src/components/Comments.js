
function Comments({ comments }) {
    return (
        <div>
            <h2>{comments.length} comments</h2>
            {comments.map((c) => {
                return (<div key={c.id}>
                    <h3>{c.user}</h3>
                    <p>{c.comment}</p>
                </div >)
            })
            }
        </div>

    )
}
export default Comments