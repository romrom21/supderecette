import SignInForm from "@/components/forms/SignInForm";
import { auth } from "@/config/firebase";

const SignInPage = () => {

    return (
        <>
            {auth.currentUser ? <p>You are signed in as {auth.currentUser.email}</p> :
                <SignInForm />
            }
        </>
    )
}

export default SignInPage