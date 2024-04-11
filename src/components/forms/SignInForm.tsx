"use client"

import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "@/config/firebase"
import {useState} from "react"
import ErrorAlert from "../ErrorAlert"
import {useRouter} from "next/navigation"
import IconInput from "@/components/IconInput"

const SignInForm = () => {
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    const {register, handleSubmit} = useForm()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const {email, password} = data

        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
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
        <div className={"flex flex-col justify-center items-center"}>
            <form className={"w-3/12 min-w-36 flex flex-col gap-4 mx-auto"} onSubmit={handleSubmit(onSubmit)}>
                <IconInput icon={"/email.svg"} placeholder={"Email"} name={"email"} type={"email"} required={true}
                           register={register}/>
                <IconInput icon={"/key.svg"} placeholder={"Password"} name={"password"} type={"password"}
                           required={true} register={register}/>
                <button className="btn btn-wide" type="submit">Sign in</button>
            </form>

            {error && <ErrorAlert message={error} setError={setError}/>}

        </div>
    )
}

export default SignInForm