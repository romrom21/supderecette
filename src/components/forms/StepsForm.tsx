"use client"

import IconInput from "@/components/IconInput"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {useParams, useRouter} from "next/navigation"
import {useState} from "react"
import ErrorAlert from "@/components/ErrorAlert"
import {addStep} from "@/actions/step"

const StepForm = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState<string | null>(null)

    const slug = useParams()
    const router = useRouter()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const {content, number} = data

        const recipeId = slug.id as string

        addStep(Number(recipeId), content, Number(number)).then(() => {
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
                           placeholder={"Details"}
                           name={"content"}
                           type={"text"}
                           required={true}
                           register={register}/>
                <div className="join">
                    <IconInput icon={"/weight.svg"}
                               placeholder={"Number"}
                               name={"number"}
                               type={"number"}
                               required={true}
                               register={register}/>
                </div>
                <button className="btn btn-wide" type="submit">Submit</button>
            </form>

            {error && <ErrorAlert message={error} setError={setError}/>}
        </div>
    )
}

export default StepForm