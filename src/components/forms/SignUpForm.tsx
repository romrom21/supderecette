"use client"

import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "@/config/firebase"
import {useState} from "react"
import ErrorAlert from "../ErrorAlert"
import {useRouter} from "next/navigation"
import IconInput from "@/components/IconInput"
import {addUser} from "@/actions/user"

const SignUpForm = () => {
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    const {register, handleSubmit} = useForm()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const {email, password, passwordConfirmation} = data

        if (password !== passwordConfirmation) {
            setError("Passwords do not match")
            return
        }

        createUserWithEmailAndPassword(auth, email, password).then(async (userCredentials) => {
            await addUser(userCredentials.user.uid, data.email, data.name)

            auth.updateCurrentUser(userCredentials.user).then(() => {
                auth.currentUser?.reload()
                setError(null)

                router.push("/recipes")
            }).catch((error) => {
                setError(error.message)
            })
        }).catch((error) => {
            setError(error.message)
        })
    }


    return (
        <div className={"flex flex-col justify-center items-center p-2"}>
            <form className={"w-3/12 min-w-36 flex flex-col gap-4 mx-auto"} onSubmit={handleSubmit(onSubmit)}>

                <IconInput icon={"/person.svg"} placeholder={"Name"} name={"name"} type={"text"} required={true} register={register}/>
                <IconInput icon={"/email.svg"} placeholder={"Email"} name={"email"} type={"email"} required={true} register={register}/>
                <IconInput icon={"/key.svg"} placeholder={"Password"} name={"password"} type={"password"} required={true} register={register}/>
                <IconInput icon={"/key.svg"} placeholder={"Repeat password"} name={"passwordConfirmation"} type={"password"} required={true} register={register}/>

                <button className="btn btn-wide" type="submit">Sign up</button>
            </form>

            {error && <ErrorAlert message={error} setError={setError}/>}

        </div>
    )
}

export default SignUpForm