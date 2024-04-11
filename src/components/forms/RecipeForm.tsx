"use client"

import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {useState} from "react"
import ErrorAlert from "../ErrorAlert"
import {Recipe} from "@prisma/client"
import IconInput from "@/components/IconInput"
import {addRecipe} from "@/actions/recipe"
import {useRouter} from "next/navigation"
import {auth} from "@/config/firebase"

const RecipeForm = () => {
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()
    const {register, handleSubmit} = useForm()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const {name, description} = data

        addRecipe(name, description, auth.currentUser?.uid!).then((r: Recipe) => {
            setError(null)

            router.push(`/recipes/${r.id}`)
        }).catch((error) => {
            setError(error.message)
        })
    }

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <form className={"w-full flex flex-col gap-4 mx-auto"} onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <IconInput icon={"/fork-and-spoon.svg"} placeholder={"Name"} name={"name"} type={"text"} required={true}
                           register={register}/>
                {/* Description */}
                <IconInput icon={"/text-description.svg"} placeholder={"Description"} name={"description"} type={"text"}
                           required={true} register={register}/>
                <button className="btn btn-wide bg-[#afaf7b] text-white" type="submit">Create recipe</button>
            </form>

            {error && <ErrorAlert message={error} setError={setError}/>}

        </div>
    )
}

export default RecipeForm