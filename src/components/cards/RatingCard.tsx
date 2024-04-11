import {Rating, Recipe} from "@prisma/client"
import {useState} from "react"
import {addRating, updateRating} from "@/actions/rating"
import {auth} from "@/config/firebase"

interface RatingCardProps {
    recipe: Recipe
}

const RatingCard = (props: RatingCardProps) => {
    const {recipe} = props
    const [rating, setRating] = useState<Rating | null>(recipe.ratings.filter(rating => rating.userId === auth.currentUser?.uid)[0] || null)

    const handleRating = (value: number) => {
        if (rating) {
            updateRating(rating.id, value).then((data: Rating) => {
                setRating(data)
            })
        } else {
            addRating(recipe.id, auth.currentUser?.uid!, value).then((data: Rating) => {
                setRating(data)
            })
        }
    }

    return (
        <div className="card w-192 card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <div className={"flex flex-row justify-between"}>
                    <h2 className="card-title">Rating</h2>
                    <div className="rating rating-lg">
                        <input type="radio" name="rating-8"
                               className={`mask mask-star-2 bg-orange-400`} checked={!!(rating && rating.value >= 1)} onClick={() => handleRating(1)}/>
                        <input type="radio" name="rating-8"
                               className={`mask mask-star-2 bg-orange-400`} checked={!!(rating && rating.value >= 2)} onClick={() => handleRating(2)}/>
                        <input type="radio" name="rating-8"
                               className={`mask mask-star-2 bg-orange-400`} checked={!!(rating && rating.value >= 3)} onClick={() => handleRating(3)}/>
                        <input type="radio" name="rating-8"
                               className={`mask mask-star-2 bg-orange-400`} checked={!!(rating && rating.value >= 4)} onClick={() => handleRating(4)}/>
                        <input type="radio" name="rating-8"
                               className={`mask mask-star-2 bg-orange-400`} checked={!!(rating && rating.value >= 5)} onClick={() => handleRating(5)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingCard