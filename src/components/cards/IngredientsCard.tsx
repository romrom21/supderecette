import {Ingredient, Recipe} from "@prisma/client"
import {auth} from "@/config/firebase"
import {deleteIngredient} from "@/actions/ingredient"
import Link from "next/link"
import {useRouter} from "next/navigation"

interface IngredientsCardProps {
    recipe: Recipe
}

const IngredientsCard = (props: IngredientsCardProps) => {
    const {recipe} = props

    const router = useRouter()

    return (
        <div className="card w-96 card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <div className={"flex flex-row justify-between"}>
                    <h2 className="card-title">Ingredients</h2>
                    {recipe.userId === auth.currentUser?.uid && (
                        <>
                            <Link href={`/recipes/${recipe.id}/add-ingredient`} className="btn btn-primary">Add</Link>
                        </>
                    )}
                </div>
                {/* Table of ingredients with delete button if current user is recipeId user*/}

                <table className="table w-full">
                    <tbody>
                        {recipe.ingredients.map((ingredient: Ingredient, index: number) => (
                            <tr key={index}>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.amount}{ingredient.unit}</td>
                                {recipe.userId === auth.currentUser?.uid && (
                                    <td>
                                        <button className="btn bg-red-500 text-white" onClick={() => deleteIngredient(ingredient.id).then(() => router.push(`/recipes/${recipe.id}`))}>Delete</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IngredientsCard