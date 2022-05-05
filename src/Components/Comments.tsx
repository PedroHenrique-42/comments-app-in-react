type CommentProps = {
    text: string
}

export function Comment(props: CommentProps){
    return(
        <p>{props.text}</p>
    )
}