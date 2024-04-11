import {Comment} from "@prisma/client"


interface CommentCardProps {
    comment: Comment
}

const CommentCard = (props: CommentCardProps) => {
    const {comment} = props

    return (
        <div className="card w-192 card-side bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{comment.user.name}</h2>
                <p>{comment.content}</p>
            </div>
        </div>
    );
}

export default CommentCard;