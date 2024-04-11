import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold">Welcome to the Recipe App</h1>
        <p className="text-2xl">Create an account or sign in to get started</p>
        <div className="flex gap-4">
            <Link href={"/sign-in"} className="btn btn-primary">Sign in</Link>
            <Link href={"sign-up"} className="btn btn-secondary">Create account</Link>
        </div>
    </main>
  );
}
