import {Recipe} from "@prisma/client"
import CommentCard from "@/components/cards/CommentCard"
import IconInput from "@/components/IconInput"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {addComment} from "@/actions/comment"
import {auth} from "@/config/firebase"
import {useRouter} from "next/navigation"

interface FeedbacksCardProps {
    recipe: Recipe
}

const FeedbacksCard = (props: FeedbacksCardProps) => {
    const {recipe} = props

    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const {comment} = data

        const userId = auth.currentUser?.uid!

        addComment(recipe.id, comment, userId).then(() => {
            router.push(`/recipes/${recipe.id}`)
        }).catch((error) => {
            console.error(error)
        })

    }

    return (
        <div className="card w-192 card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Comments</h2>
                {recipe.comments.map((comment: Comment, index: number) => (
                    <CommentCard comment={comment} key={index}/>
                ))}
            {/*    Add an input with submit to post a comment*/}
                <form className={"w-full flex flex-col gap-4 mx-auto"} onSubmit={handleSubmit(onSubmit)}>
                    <IconInput icon={"/text-description.svg"} placeholder={"Comment"} name={"comment"} type={"text"}
                               required={true} register={register}/>
                    <button className="btn btn-wide bg-[#afaf7b] text-white" type="submit">Post comment</button>
                </form>
            </div>
        </div>
    )
}

export default FeedbacksCard