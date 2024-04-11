"use client"

import Link from "next/link"
import {auth} from "@/config/firebase"
import {signOut} from "@firebase/auth"
import {useRouter} from "next/navigation"


const TopBar = () => {
    const router = useRouter()

    return (
        <>
            <div className="navbar bg-[#ebae77] rounded-b-xl">
                <div className="flex-1">
                    <Link href={"/recipes"} className="btn btn-ghost text-xl">Sup de recette</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {auth.currentUser ?
                            (
                                <li>
                                    <button onClick={() => signOut(auth).then(() => {
                                        }).catch((error) => {
                                        auth.updateCurrentUser(null).then(() => {
                                            router.push("/")
                                            auth.currentUser?.reload()
                                            console.log(error.message)
                                        })
                                    })}>Sign out
                                    </button>
                                </li>)
                            :
                            (
                                <>
                                    <li><Link href={"/sign-in"}>Sign in</Link></li>
                                    <li><Link href={"/sign-up"}>Sign up</Link></li>
                                </>)
                        }
                    </ul>
                </div>
            </div>
        </>)
}

export default TopBar