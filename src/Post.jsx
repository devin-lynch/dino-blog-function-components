import Comment from "./Comment";

function Post(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.title}</h1>

            <p>by: {props.author}</p>

            <p>{props.body}</p>

           {props.comments.map((comment, i) => {
            return <Comment key={`comment-${i}`} commentText={comment} />
           })}
        </div>
    )
}

export default Post;