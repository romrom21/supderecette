import { Dispatch, SetStateAction } from "react"

interface ErrorAlertProps {
    message: string
    setError: Dispatch<SetStateAction<string | null>>
}

const ErrorAlert = (props: ErrorAlertProps) => {
    const { message, setError } = props

    return (
        // Center the alert on top of the screen

        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-zinc-200 bg-opacity-80 flex justify-center items-center">
            <div role="alert" className="alert alert-error w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{message}</span>
                <div>
                    <button className="btn btn-sm" onClick={() => setError(null)}>Ok</button>
                </div>
            </div>
        </div>
    )

}

export default ErrorAlert