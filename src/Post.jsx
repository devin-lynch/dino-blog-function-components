function Post(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.title}</h1>

            <p>by: {props.author}</p>

            <p>{props.body}</p>

           {props.comments.map((comment, i) => {
            return <p key={i}>{comment}</p>
           })}
        </div>
    )
}

export default Post;