"use client"

import IconInput from "@/components/IconInput"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {useParams, useRouter} from "next/navigation"
import {addIngredient} from "@/actions/ingredient"
import {useState} from "react"
import ErrorAlert from "@/components/ErrorAlert"

const IngredientForm = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState<string | null>(null)

    const slug = useParams()
    const router = useRouter()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const {name, amount, unit} = data

        if (unit === "Unit") {
            setError("Please select a unit")
            return
        }

        const recipeId = slug.id as string

        addIngredient(Number(recipeId), name, Number(amount), unit).then(() => {
            setError(null)

            router.push(`/recipes/${recipeId}`)

        }).catch((error) => {
            setError(error.message)
        })
    }


    return (
        <div className={"flex flex-col justify-center items-center"}>
            <form className={"w-3/12 min-w-36 flex flex-col gap-4 mx-auto"} onSubmit={handleSubmit(onSubmit)}>
                <IconInput icon={"/carrot.svg"}
                           placeholder={"Name"}
                           name={"name"}
                           type={"text"}
                           required={true}
                           register={register}/>
                <div className="join">
                    <IconInput icon={"/weight.svg"}
                               placeholder={"Quantity"}
                               name={"amount"}
                               type={"number"}
                               required={true}
                               register={register}/>
                    <select className="select select-bordered join-item" defaultValue={"Unit"} {...register("unit")} required={true}>
                        <option disabled>Unit</option>
                        <option>g</option>
                        <option>kg</option>
                        <option>ml</option>
                        <option>l</option>
                    </select>
                </div>
                <button className="btn btn-wide" type="submit">Submit</button>
            </form>

            {error && <ErrorAlert message={error} setError={setError}/>}
        </div>
    )
}

export default IngredientForm