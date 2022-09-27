import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          className="rounded w-28 bg-gray-400 text-lg p-2 hover:bg-gray-800 hover:text-white"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="rounded w-28 bg-gray-400 text-lg p-2 hover:bg-gray-800 hover:text-white"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
