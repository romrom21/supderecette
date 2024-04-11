import SignUpForm from "@/components/forms/SignUpForm";
import { auth } from "@/config/firebase";

const SignUpPage = () => {

    return (
        <>
            {auth.currentUser ? <p>You are signed in as {auth.currentUser.email}</p> :
                <SignUpForm />
            }
        </>
    )
}

export default SignUpPage