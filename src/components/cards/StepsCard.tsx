import {Recipe, Step} from "@prisma/client"
import {auth} from "@/config/firebase"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {deleteStep} from "@/actions/step"

interface StepsCardProps {
    recipe: Recipe
}

const StepsCard = (props: StepsCardProps) => {
    const {recipe} = props
    const router = useRouter()

    return (
        <div className="card w-192 card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <div className={"flex flex-row justify-between"}>
                    <h2 className="card-title">Steps</h2>
                    {recipe.userId === auth.currentUser?.uid && (
                        <>
                            <Link href={`/recipes/${recipe.id}/add-step`} className="btn btn-primary">Add</Link>
                        </>
                    )}
                </div>
                <table className="table w-full">
                    <tbody>
                    {recipe.steps.map((step: Step, index: number) => (
                        <tr key={index}>
                            <td>{step.content}</td>
                            {recipe.userId === auth.currentUser?.uid && (
                                <td>
                                    <button className="btn bg-red-500 text-white"
                                            onClick={() => deleteStep(step.id).then(() => router.push(`/recipes/${recipe.id}`))}>Delete
                                    </button>
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

export default StepsCard